import { fields } from '@keystatic/core';
import { block, wrapper } from '@keystatic/core/content-components';
import Markdoc from '@markdoc/markdoc';

/**
 * Single source of truth for the blog's custom content blocks.
 *
 * `postComponents` powers the Keystatic editor (insertable components with a
 * live preview). `markdocTags` renders the same blocks to HTML at build time.
 * The two must stay in sync: a component's key here is the Markdoc tag name,
 * and its schema keys are the tag attributes.
 */

// Where block images are stored (matches the post `content` field).
const imageDir = { directory: 'public/images/blog', publicPath: '/images/blog' } as const;

export const ALIGN_OPTIONS = [
  { label: 'Left', value: 'left' },
  { label: 'Center', value: 'center' },
  { label: 'Right', value: 'right' },
  { label: 'Full width', value: 'full' },
] as const;

export const WIDTH_OPTIONS = [
  { label: 'Small', value: 'small' },
  { label: 'Medium', value: 'medium' },
  { label: 'Large', value: 'large' },
  { label: 'Full', value: 'full' },
] as const;

export const SIDE_OPTIONS = [
  { label: 'Image left', value: 'left' },
  { label: 'Image right', value: 'right' },
] as const;

export const COLUMN_OPTIONS = [
  { label: '2 columns', value: '2' },
  { label: '3 columns', value: '3' },
  { label: '4 columns', value: '4' },
] as const;

// A reusable image + alt pair for multi-image blocks.
const imageItem = fields.object({
  src: fields.image({ label: 'Image', ...imageDir, validation: { isRequired: true } }),
  alt: fields.text({ label: 'Alt text' }),
});

// Small preview helpers (editor only) --------------------------------------

function Thumb({ src, alt }: { src: unknown; alt?: unknown }) {
  if (typeof src === 'string' && src) {
    return <img src={src} alt={typeof alt === 'string' ? alt : ''} style={{ width: '100%', height: 90, objectFit: 'cover', borderRadius: 4 }} />;
  }
  return <div style={{ height: 90, border: '1px dashed #bbb', borderRadius: 4 }} />;
}

function asArray(value: unknown): { src?: unknown; alt?: unknown }[] {
  return Array.isArray(value) ? value : [];
}

// ---------------------------------------------------------------------------
// Authoring: Keystatic content components (editor UI + preview)
// ---------------------------------------------------------------------------

export const postComponents = {
  image: block({
    label: 'Single image',
    description: 'One image with alignment, width and an optional caption.',
    schema: {
      src: fields.image({ label: 'Image', ...imageDir, validation: { isRequired: true } }),
      alt: fields.text({ label: 'Alt text', description: 'Describe the image for accessibility.' }),
      align: fields.select({ label: 'Alignment', options: ALIGN_OPTIONS, defaultValue: 'center' }),
      width: fields.select({ label: 'Width', options: WIDTH_OPTIONS, defaultValue: 'medium' }),
      caption: fields.text({ label: 'Caption' }),
    },
    ContentView(props) {
      const { src, alt, caption, align, width } = props.value;
      return (
        <figure style={{ margin: '0.5rem 0', textAlign: 'center' }}>
          {typeof src === 'string' && src ? (
            <img src={src} alt={typeof alt === 'string' ? alt : ''} style={{ maxWidth: '100%', borderRadius: 4 }} />
          ) : (
            <div style={{ padding: '1.5rem', border: '1px dashed #bbb', borderRadius: 4, color: '#888' }}>
              🖼 Single image · {String(align)} · {String(width)}
            </div>
          )}
          {caption ? <figcaption style={{ fontSize: '0.85rem', color: '#666' }}>{String(caption)}</figcaption> : null}
        </figure>
      );
    },
  }),

  photoRow: block({
    label: 'Photo row',
    description: 'Two to four images side by side (stacks on mobile).',
    schema: {
      images: fields.array(imageItem, {
        label: 'Images',
        itemLabel: (p) => (typeof p.fields.alt.value === 'string' && p.fields.alt.value) || 'Image',
        validation: { length: { min: 2, max: 4 } },
      }),
    },
    ContentView(props) {
      const images = asArray(props.value.images);
      return (
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.max(images.length, 1)}, 1fr)`, gap: 4, margin: '0.5rem 0' }}>
          {images.map((img, i) => <Thumb key={i} src={img.src} alt={img.alt} />)}
        </div>
      );
    },
  }),

  gallery: block({
    label: 'Gallery',
    description: 'A grid of many images. Good for photo-heavy posts.',
    schema: {
      images: fields.array(imageItem, {
        label: 'Images',
        itemLabel: (p) => (typeof p.fields.alt.value === 'string' && p.fields.alt.value) || 'Image',
      }),
      columns: fields.select({ label: 'Columns', options: COLUMN_OPTIONS, defaultValue: '3' }),
    },
    ContentView(props) {
      const images = asArray(props.value.images);
      const cols = Number(props.value.columns) || 3;
      return (
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 4, margin: '0.5rem 0' }}>
          {images.map((img, i) => <Thumb key={i} src={img.src} alt={img.alt} />)}
        </div>
      );
    },
  }),

  split: wrapper({
    label: 'Split (image + text)',
    description: 'An image beside a block of text. The text is written inside the block.',
    schema: {
      image: fields.image({ label: 'Image', ...imageDir, validation: { isRequired: true } }),
      alt: fields.text({ label: 'Alt text' }),
      side: fields.select({ label: 'Image side', options: SIDE_OPTIONS, defaultValue: 'left' }),
      width: fields.select({ label: 'Image width', options: WIDTH_OPTIONS, defaultValue: 'medium' }),
    },
    ContentView(props) {
      const { image, alt, side } = props.value;
      const media = <div style={{ flex: '0 0 40%' }}><Thumb src={image} alt={alt} /></div>;
      const text = <div style={{ flex: 1 }}>{props.children}</div>;
      return (
        <div style={{ display: 'flex', gap: 12, margin: '0.5rem 0' }}>
          {side === 'right' ? <>{text}{media}</> : <>{media}{text}</>}
        </div>
      );
    },
  }),
};

// ---------------------------------------------------------------------------
// Rendering: Markdoc tag transforms (build-time HTML)
// ---------------------------------------------------------------------------

function imgTag(src: string, alt: string) {
  return new Markdoc.Tag('img', { src, alt, loading: 'lazy' });
}

function imagesFromAttr(images: any): { src: string; alt: string }[] {
  if (!Array.isArray(images)) return [];
  return images
    .filter((i) => i && typeof i.src === 'string')
    .map((i) => ({ src: i.src as string, alt: typeof i.alt === 'string' ? i.alt : '' }));
}

export const markdocTags = {
  image: {
    render: 'figure',
    attributes: {
      src: { type: String, required: true },
      alt: { type: String, default: '' },
      align: { type: String, default: 'center' },
      width: { type: String, default: 'medium' },
      caption: { type: String, default: '' },
    },
    transform(node: any, config: any) {
      const a = node.transformAttributes(config);
      const children: any[] = [imgTag(a.src, a.alt)];
      if (a.caption) children.push(new Markdoc.Tag('figcaption', {}, [a.caption]));
      return new Markdoc.Tag('figure', { class: `blk-image blk-image--${a.align} blk-image--w-${a.width}` }, children);
    },
  },

  photoRow: {
    render: 'div',
    attributes: {
      images: { type: Array, required: true },
    },
    transform(node: any, config: any) {
      const a = node.transformAttributes(config);
      const imgs = imagesFromAttr(a.images);
      return new Markdoc.Tag(
        'div',
        { class: `blk-photo-row blk-photo-row--n${imgs.length}` },
        imgs.map((i) => imgTag(i.src, i.alt)),
      );
    },
  },

  gallery: {
    render: 'div',
    attributes: {
      images: { type: Array, required: true },
      columns: { type: String, default: '3' },
    },
    transform(node: any, config: any) {
      const a = node.transformAttributes(config);
      const imgs = imagesFromAttr(a.images);
      return new Markdoc.Tag(
        'div',
        { class: `blk-gallery blk-gallery--cols-${a.columns}` },
        imgs.map((i) => imgTag(i.src, i.alt)),
      );
    },
  },

  split: {
    render: 'div',
    attributes: {
      image: { type: String, required: true },
      alt: { type: String, default: '' },
      side: { type: String, default: 'left' },
      width: { type: String, default: 'medium' },
    },
    transform(node: any, config: any) {
      const a = node.transformAttributes(config);
      const media = new Markdoc.Tag('div', { class: 'blk-split__media' }, [imgTag(a.image, a.alt)]);
      const text = new Markdoc.Tag('div', { class: 'blk-split__text' }, node.transformChildren(config));
      return new Markdoc.Tag(
        'div',
        { class: `blk-split blk-split--${a.side} blk-split--w-${a.width}` },
        [media, text],
      );
    },
  },
};
