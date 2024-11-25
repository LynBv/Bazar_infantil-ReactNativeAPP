package br.org.serratec.dto;

import br.org.serratec.enums.CategoriaIdade;
import br.org.serratec.enums.CategoriasGenero;

public class PostagemInserirDTO {

	private String titulo;
	private String descricao;
	private CategoriasGenero categoriasGenero;
	private CategoriaIdade categoriaIdade;
	private Double preco;
	private FotoInserirDto foto;

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public CategoriasGenero getCategoriasGenero() {
		return categoriasGenero;
	}

	public void setCategoriasGenero(CategoriasGenero categoriasGenero) {
		this.categoriasGenero = categoriasGenero;
	}

	public CategoriaIdade getCategoriaIdade() {
		return categoriaIdade;
	}

	public void setCategoriaIdade(CategoriaIdade categoriaIdade) {
		this.categoriaIdade = categoriaIdade;
	}

	public Double getPreco() {
		return preco;
	}

	public void setPreco(Double preco) {
		this.preco = preco;
	}

	public FotoInserirDto getFoto() {
		return foto;
	}

	public void setFoto(FotoInserirDto foto) {
		this.foto = foto;
	}

	
}
