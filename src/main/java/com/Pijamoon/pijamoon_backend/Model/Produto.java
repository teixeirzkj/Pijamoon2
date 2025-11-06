package com.Pijamoon.pijamoon_backend.Model;

public class Produto {
private long id;
private String name;
private String descricao;
private int quantidade;
private double preco;
private String imageUrl;

    public Produto(long id, String name, String descricao, int quantidade, double preco) {
        this.id = id;
        this.name = name;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.preco = preco;
        this.imageUrl = imageUrl;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }
}
