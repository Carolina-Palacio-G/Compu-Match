import { EditorContent, JSONContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Json } from '../../../supabase/supabase';

interface Props {
	content: JSONContent | Json;
}

export const ProductDescription = ({ content }: Props) => {
	const editor = useEditor({
		extensions: [StarterKit],
		content: content as JSONContent,
		editable: false,
		editorProps: {
			attributes: {
				class: 'prose prose-sm sm:prose-base max-w-none',
			},
		},
	});

	return (
			<EditorContent editor={editor} />
	);
};