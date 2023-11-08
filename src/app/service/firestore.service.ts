import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from '@angular/fire/firestore'

import { Task } from "../Task";
import { DocumentData } from 'rxfire/firestore/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private fireStore: Firestore) { }

  getTasks(): Observable<DocumentData[]>{
    const collectionInstance = collection(this.fireStore, 'tasks');
    return collectionData(collectionInstance, {idField: 'id'});
  }

  deleteTask(task: Task){
    const id: string | any =  task.id;
    const docInstance = doc(this.fireStore, 'tasks', id);
    deleteDoc(docInstance);
    return this.getTasks()
  }

  updateTaskReminder(task: Task){
    const id: string | any =  task.id;
    const docInstance = doc(this.fireStore, 'tasks', id);
    const updateData = {
      reminder: !task.reminder,
      updated_at: new Date()
    }
    updateDoc(docInstance, updateData);
    return this.getTasks()
  }

  addTask(task: Task){
    const collectionInstance = collection(this.fireStore, 'tasks');
    task.created_at = new Date();
    task.updated_at = new Date();
    addDoc(collectionInstance, task)
    return this.getTasks()
  }

}
