[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / DebitNoteReference

# Class: DebitNoteReference

Describes the parameters that constitute a debit note reference

**`Generated`**

from message Scailo.DebitNoteReference

## Hierarchy

- `Message`\<[`DebitNoteReference`](DebitNoteReference.md)\>

  ↳ **`DebitNoteReference`**

## Table of contents

### Constructors

- [constructor](DebitNoteReference.md#constructor)

### Properties

- [approvalMetadata](DebitNoteReference.md#approvalmetadata)
- [debitNoteId](DebitNoteReference.md#debitnoteid)
- [entityUuid](DebitNoteReference.md#entityuuid)
- [metadata](DebitNoteReference.md#metadata)
- [needApproval](DebitNoteReference.md#needapproval)
- [purchaseReturnId](DebitNoteReference.md#purchasereturnid)
- [userComment](DebitNoteReference.md#usercomment)
- [fields](DebitNoteReference.md#fields)
- [runtime](DebitNoteReference.md#runtime)
- [typeName](DebitNoteReference.md#typename)

### Methods

- [clone](DebitNoteReference.md#clone)
- [equals](DebitNoteReference.md#equals)
- [fromBinary](DebitNoteReference.md#frombinary)
- [fromJson](DebitNoteReference.md#fromjson)
- [fromJsonString](DebitNoteReference.md#fromjsonstring)
- [getType](DebitNoteReference.md#gettype)
- [toBinary](DebitNoteReference.md#tobinary)
- [toJSON](DebitNoteReference.md#tojson)
- [toJson](DebitNoteReference.md#tojson-1)
- [toJsonString](DebitNoteReference.md#tojsonstring)
- [equals](DebitNoteReference.md#equals-1)
- [fromBinary](DebitNoteReference.md#frombinary-1)
- [fromJson](DebitNoteReference.md#fromjson-1)
- [fromJsonString](DebitNoteReference.md#fromjsonstring-1)

## Constructors

### constructor

• **new DebitNoteReference**(`data?`): [`DebitNoteReference`](DebitNoteReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DebitNoteReference`](DebitNoteReference.md)\> |

#### Returns

[`DebitNoteReference`](DebitNoteReference.md)

#### Overrides

Message\&lt;DebitNoteReference\&gt;.constructor

#### Defined in

[src/debit_notes.scailo_pb.ts:2489](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L2489)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/debit_notes.scailo_pb.ts:2459](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L2459)

___

### debitNoteId

• **debitNoteId**: `bigint` = `protoInt64.zero`

Stores the debit note ID

**`Generated`**

from field: uint64 debit_note_id = 10;

#### Defined in

[src/debit_notes.scailo_pb.ts:2480](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L2480)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/debit_notes.scailo_pb.ts:2445](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L2445)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this debit note

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/debit_notes.scailo_pb.ts:2452](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L2452)

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/debit_notes.scailo_pb.ts:2466](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L2466)

___

### purchaseReturnId

• **purchaseReturnId**: `bigint` = `protoInt64.zero`

Stores the purchase return ID

**`Generated`**

from field: uint64 purchase_return_id = 11;

#### Defined in

[src/debit_notes.scailo_pb.ts:2487](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L2487)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/debit_notes.scailo_pb.ts:2473](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L2473)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/debit_notes.scailo_pb.ts:2496](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L2496)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/debit_notes.scailo_pb.ts:2494](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L2494)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DebitNoteReference"``

#### Defined in

[src/debit_notes.scailo_pb.ts:2495](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L2495)

## Methods

### clone

▸ **clone**(): [`DebitNoteReference`](DebitNoteReference.md)

Create a deep copy.

#### Returns

[`DebitNoteReference`](DebitNoteReference.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`DebitNoteReference`](DebitNoteReference.md) \| `PlainMessage`\<[`DebitNoteReference`](DebitNoteReference.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`DebitNoteReference`](DebitNoteReference.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DebitNoteReference`](DebitNoteReference.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`DebitNoteReference`](DebitNoteReference.md) \| `PlainMessage`\<[`DebitNoteReference`](DebitNoteReference.md)\> |
| `b` | `undefined` \| [`DebitNoteReference`](DebitNoteReference.md) \| `PlainMessage`\<[`DebitNoteReference`](DebitNoteReference.md)\> |

#### Returns

`boolean`

#### Defined in

[src/debit_notes.scailo_pb.ts:2518](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L2518)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DebitNoteReference`](DebitNoteReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DebitNoteReference`](DebitNoteReference.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:2506](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L2506)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DebitNoteReference`](DebitNoteReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNoteReference`](DebitNoteReference.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:2510](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L2510)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DebitNoteReference`](DebitNoteReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNoteReference`](DebitNoteReference.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:2514](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L2514)
