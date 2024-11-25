package br.org.serratec.dto;

public class FotoInserirDto {

    private byte[] dados;
    private String tipo;
    private String nome;
    public byte[] getDados() {
        return dados;
    }
    public void setDados(byte[] dados) {
        this.dados = dados;
    }
    public String getTipo() {
        return tipo;
    }
    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }

    
    
}
