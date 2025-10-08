const dateInput = document.getElementById('date');
        const professorInput = document.getElementById('professor');
        const disciplinaInput = document.getElementById('disciplina');
        const aulaSelect = document.getElementById('aula');
        const codigoInput = document.getElementById('codigo');
        const alunosInput = document.getElementById('alunos');
        const addWarningBtn = document.getElementById('add-warning-btn');
        const warningList = document.getElementById('warning-list');

        function addWarning() {
            const date = dateInput.value;
            const professor = professorInput.value;
            const disciplina = disciplinaInput.value;
            const aula = aulaSelect.value;
            const codigo = codigoInput.value;
            const alunos = alunosInput.value.split(',').map(aluno => aluno.trim());

            if (date && professor && disciplina && aula && codigo && alunos.length > 0 && alunos[0] !== '') {
                const newWarning = document.createElement('li');
                newWarning.textContent = `Data: ${date} - Prof: ${professor} - Disciplina: ${disciplina} - Aula: ${aula}ª - Código: ${codigo} - Alunos: ${alunos.join(', ')}`;
                warningList.appendChild(newWarning);

                dateInput.value = '';
                professorInput.value = '';
                disciplinaInput.value = '';
                aulaSelect.value = '1';
                codigoInput.value = '';
                alunosInput.value = '';
            } else {
                alert('Por favor, preencha todos os campos corretamente.');
            }
        }

        addWarningBtn.onclick = addWarning;
    
