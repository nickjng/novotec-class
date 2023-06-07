public class Professor {

    private Integer id;
    private String nome;
    private String materia;
    private Double preco;

    public Professor(Integer id, String nome, String materia, Double preco) {
        this.id = id;
        this.nome = nome;
        this.materia = materia;
        this.preco = preco;
    }


    public void somar(Integer numero1, Integer numero2){
        Integer resultado = numero1 + numero2;
        System.out.println(+numero1+ " + "+numero2+" = " + resultado);
    }


}
