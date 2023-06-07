public class Aluno {

    Integer id;
    String nome;


    public Aluno(Integer id, String nome) {
        this.id = id;
        this.nome = nome;
    }

    public void somar(Integer n1, Integer n2){
        Integer resultado = n1  + n2;
        System.out.println(n1+" + "+n2+ " = "+resultado);
    };
    public void subtrair(Integer n1, Integer n2){
        Integer resultado = n1 - n2;
        System.out.println(n1+" - "+n2+ " = "+resultado);
    };
    public void multiplicar(Integer n1, Integer n2){
        Integer resultado = n1 * n2;
        System.out.println(n1+" x "+n2+ " = "+resultado);
    };
    public void dividir(Double n1, Double n2){
        Double resultado = n1 / n2;
        System.out.println(n1+" / "+n2+ " = "+resultado);
    };
    public void calcularTabuada(Integer numero){
        for (int i = 1; i <= 10; i++ ){
            System.out.println(numero + " x " + i + " = " + numero * i);
        }
    };

    public Integer getId() {
        return id;
    }


    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    @Override
    public String toString() {
        return "Aluno{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                '}';
    }
}
