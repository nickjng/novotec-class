import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {


        Professor p1 = new Professor(1, "Nickolas", "Matematica", 40.0);
        Scanner read = new Scanner(System.in);
        List<Aluno> alunos = new ArrayList<>();

        Integer identificador;
        String nomeAluno;
        String nomeAlunoProcurado;
        String escolha;


        Boolean keep = true;

        while(keep){

        System.out.println("Bem vindo a Escola XPTO");
        System.out.println("Escolha uma dessas opções: \n");
        System.out.println("1- Adcionar um aluno \n" +
                           "2 - Encontrar um aluno \n" +
                           "3- Exibir todos os aluno ");

        escolha = read.next();



            switch (escolha) {
                case "1":

                    System.out.println("Digite um indentificador numerico para esse aluno ");
                    identificador = read.nextInt();

                    System.out.println("Digite o nome do aluno");
                    nomeAluno = read.next();
                    alunos.add(new Aluno(identificador, nomeAluno));

                    break;
                case "2":
                    System.out.println("Digite o nome desse aluno");
                    nomeAlunoProcurado = read.next();;

                    for (int i = 0; i < alunos.size(); i++){
                        Aluno a = alunos.get(i);
                        if(a.nome.equals(nomeAlunoProcurado)){
                            System.out.println(a.toString());
                        }
                    }

                    break;
                case "3":

                    for (int i = 0; i < alunos.size(); i++){
                        Aluno a = alunos.get(i);
                        System.out.printf("%06d %-14s \n", a.getId(), a.getNome());
                    }

                    break;
            }

        }

    }
}