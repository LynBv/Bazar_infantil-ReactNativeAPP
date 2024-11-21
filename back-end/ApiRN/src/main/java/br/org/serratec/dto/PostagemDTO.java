package br.org.serratec.dto;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

import br.org.serratec.domain.Foto;
import br.org.serratec.domain.Postagem;
import br.org.serratec.enums.CategoriaIdade;
import br.org.serratec.enums.CategoriasGenero;

public class PostagemDTO {

	private Long id;
	private String titulo;
	private String descricao;
	private CategoriasGenero categoriasGenero;
	private CategoriaIdade categoriasIdade;
	private Double preco;
	private LocalDate dataCriacao;
	private List<Foto> foto;
	private UsuarioDTO usuarioDTO;

	public PostagemDTO() {
	}

	public PostagemDTO(Postagem postagem) {
		this.id = postagem.getId();
		this.titulo = postagem.getTitulo();
		this.descricao = postagem.getDescricao();
		this.categoriasGenero = postagem.getCategoriasGenero();
		this.categoriasIdade = postagem.getCategoriasIdade();
		this.preco = postagem.getPreco();
		this.dataCriacao = postagem.getDataCriacao();
		this.foto = postagem.getFoto();
		this.usuarioDTO = new UsuarioDTO(postagem.getUsuario());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

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

	public CategoriaIdade getCategoriasIdade() {
		return categoriasIdade;
	}

	public void setCategoriasIdade(CategoriaIdade categoriasIdade) {
		this.categoriasIdade = categoriasIdade;
	}

	public UsuarioDTO getUsuarioDTO() {
		return usuarioDTO;
	}

	public void setUsuarioDTO(UsuarioDTO usuarioDTO) {
		this.usuarioDTO = usuarioDTO;
	}

	public Double getPreco() {
		return preco;
	}

	public void setPreco(Double preco) {
		this.preco = preco;
	}

	public LocalDate getDataCriacao() {
		return dataCriacao;
	}

	public void setDataCriacao(LocalDate dataCriacao) {
		this.dataCriacao = dataCriacao;
	}

	public List<Foto> getFoto() {
		return foto;
	}

	public void setFoto(List<Foto> foto) {
		this.foto = foto;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		PostagemDTO other = (PostagemDTO) obj;
		return Objects.equals(id, other.id);
	}

}
