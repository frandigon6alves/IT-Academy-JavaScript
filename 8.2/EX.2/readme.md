Somos solicitados a criar um aplicativo para registrar, modificar, visualizar e excluir hotéis.

A classe do hotel deve ter os seguintes atributos:
nome,
número de quartos,
número de andares,
área total do hotel.

Como métodos terá que ter apenas os getters e setters da classe e um método chamado calcularManteniment(). Este método deve ter em conta que cada pessoa de serviço pode servir 20 quartos e terá que mostrar quantas pessoas são necessárias para servir o serviço de quartos do hotel e qual o custo total alocado ao serviço sabendo que essas pessoas cobram 1.500€ por mês.

A função crearHotel() deve solicitar ao usuário que digite na tela o nome, número de quartos, número de andares e área total do hotel (ou deve receber este dado por parâmetro). Depois de solicitar todos esses dados, o objeto de classe deve ser instanciado e adicionado a uma matriz de hotéis.

A função donarDeBaixaHotel() deve receber o nome do hotel a ser cancelado. O usuário irá inserir o nome do hotel e se o hotel estiver no array, nós o deletaremos e mostraremos uma mensagem na tela informando ao usuário que deletamos o hotel. Caso não tenhamos encontrado o hotel dentro do array, notificaremos o usuário dizendo que o hotel não estava dentro do nosso aplicativo.

A função veureHotel() deve receber o nome do hotel que você deseja que mostremos na tela, se o hotel estiver em nossa aplicação, mostraremos o hotel, se não estiver, informaremos o usuário dizendo que o hotel que você solicitou não está em nosso aplicativo.
Quando mostramos o hotel, além de mostrar o número de quartos, número de andares e área total do hotel, também será chamado o método calcularManteniment().

A função modificarHotel() deve receber o nome do hotel que queremos modificar. O usuário digitará o nome do hotel. Se o tivermos no aplicativo, perguntaremos se você deseja modificar o número de quartos, o número de andares ou a área total do hotel. Faremos a modificação relevante e notificaremos o usuário de que a modificação foi feita.

