import { fireEvent, render, screen } from "@testing-library/react"
import Post from "."
import PostComment from "."
import userEvent from "@testing-library/user-event"
import exp from "constants"

describe("Teste para o componente PostComment", () => {
	it("Deve renderizar o componente corretamente", () => {
		render(<PostComment />)
		expect(screen.getByText("Comentar")).toBeInTheDocument()
	})
	it("Deve retornar dois comentários", () => {
		render(<PostComment />)
		const textArea = screen.getByTestId("textarea-comentario")
		const botao = screen.getByTestId("btn-comentar")
		userEvent.type(textArea, "Primeiro comentário")
		fireEvent.click(botao)

		userEvent.type(textArea, "Segundo comentário")
		fireEvent.click(botao)

		expect(screen.getByText("Primeiro comentário")).toBeInTheDocument()
		expect(screen.getByText("Segundo comentário")).toBeInTheDocument()
	})
})
