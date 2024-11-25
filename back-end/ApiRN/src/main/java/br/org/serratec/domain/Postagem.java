package br.org.serratec.domain;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonIgnore;

import br.org.serratec.enums.CategoriaIdade;
import br.org.serratec.enums.CategoriasGenero;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
public class Postagem {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@NotBlank
	@Column
	private String titulo;

	@NotBlank
	@Column
	private String descricao;

	@NotNull
	@Column
	private CategoriasGenero categoriasGenero;
	
	@NotNull
	@Column
	private CategoriaIdade categoriasIdade;

	@NotNull
	@Column
	private Double preco;

	@NotNull
	@Column(name = "data_criacao")
	private LocalDate dataCriacao;

	@JsonIgnore
	@OneToMany(mappedBy = "postagem", cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
	private List<Foto> foto;

	@ManyToOne
	@JoinColumn(name = "id_usuario")
	private Usuario usuario;

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

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
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
		Postagem other = (Postagem) obj;
		return Objects.equals(id, other.id);
	}

}
