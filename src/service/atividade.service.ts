import {Injectable} from '@angular/core';
import {Atividade} from '../modelo/atividade';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';

@Injectable()
export class AtividadeService {

  itemsCollection: AngularFirestoreCollection<Atividade> = this.afs.collection<Atividade>('atividade');

  constructor(private afs: AngularFirestore){}

  getAtividades(){
    return this.itemsCollection;
  }

  addAtividade(atividade: Atividade){
    const id = this.afs.createId();
    atividade.key = id;
    this.itemsCollection.doc(id).set(JSON.parse(JSON.stringify(atividade)));
  }

  updateAtividade(atividade: Atividade){
    return this.itemsCollection.doc(atividade.key).update(atividade);
  }

  removerAtividade(atividade: Atividade){
    return this.itemsCollection.doc(atividade.key).delete();
  }

}
