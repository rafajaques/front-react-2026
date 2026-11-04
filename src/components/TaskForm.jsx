// src/components/TaskForm.jsx
import { useActionState } from "react";
const empty = { titulo: "", descricao: "" };

export default function TaskForm({ onAdd }) {
    const [state, formAction, isPending] = useActionState(async (_previousState, formData) => {
        const titulo = formData.get("titulo").trim();
        const descricao = formData.get("descricao").trim();

        if (!titulo) return empty;

        const ok = await onAdd({ titulo, descricao: descricao || null });

        // Se a ação falhar, retornamos os dados do formulário para que o usuário possa corrigir.
        return ok ? empty : { titulo, descricao };
    }, empty)
}