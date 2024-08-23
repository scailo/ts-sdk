[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / QCSamplesServiceUpdateRequest

# Class: QCSamplesServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.QCSamplesServiceUpdateRequest

## Hierarchy

- `Message`\<[`QCSamplesServiceUpdateRequest`](QCSamplesServiceUpdateRequest.md)\>

  ↳ **`QCSamplesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](QCSamplesServiceUpdateRequest.md#constructor)

### Properties

- [description](QCSamplesServiceUpdateRequest.md#description)
- [id](QCSamplesServiceUpdateRequest.md#id)
- [name](QCSamplesServiceUpdateRequest.md#name)
- [notifyUsers](QCSamplesServiceUpdateRequest.md#notifyusers)
- [userComment](QCSamplesServiceUpdateRequest.md#usercomment)
- [vaultFolderId](QCSamplesServiceUpdateRequest.md#vaultfolderid)
- [fields](QCSamplesServiceUpdateRequest.md#fields)
- [runtime](QCSamplesServiceUpdateRequest.md#runtime)
- [typeName](QCSamplesServiceUpdateRequest.md#typename)

### Methods

- [clone](QCSamplesServiceUpdateRequest.md#clone)
- [equals](QCSamplesServiceUpdateRequest.md#equals)
- [fromBinary](QCSamplesServiceUpdateRequest.md#frombinary)
- [fromJson](QCSamplesServiceUpdateRequest.md#fromjson)
- [fromJsonString](QCSamplesServiceUpdateRequest.md#fromjsonstring)
- [getType](QCSamplesServiceUpdateRequest.md#gettype)
- [toBinary](QCSamplesServiceUpdateRequest.md#tobinary)
- [toJSON](QCSamplesServiceUpdateRequest.md#tojson)
- [toJson](QCSamplesServiceUpdateRequest.md#tojson-1)
- [toJsonString](QCSamplesServiceUpdateRequest.md#tojsonstring)
- [equals](QCSamplesServiceUpdateRequest.md#equals-1)
- [fromBinary](QCSamplesServiceUpdateRequest.md#frombinary-1)
- [fromJson](QCSamplesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](QCSamplesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCSamplesServiceUpdateRequest**(`data?`): [`QCSamplesServiceUpdateRequest`](QCSamplesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCSamplesServiceUpdateRequest`](QCSamplesServiceUpdateRequest.md)\> |

#### Returns

[`QCSamplesServiceUpdateRequest`](QCSamplesServiceUpdateRequest.md)

#### Overrides

Message\&lt;QCSamplesServiceUpdateRequest\&gt;.constructor

#### Defined in

src/qc_samples.scailo_pb.ts:515

## Properties

### description

• **description**: `string` = `""`

The description of the qc sample

**`Generated`**

from field: string description = 21;

#### Defined in

src/qc_samples.scailo_pb.ts:513

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/qc_samples.scailo_pb.ts:485

___

### name

• **name**: `string` = `""`

The name of the qc sample

**`Generated`**

from field: string name = 20;

#### Defined in

src/qc_samples.scailo_pb.ts:506

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

src/qc_samples.scailo_pb.ts:492

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/qc_samples.scailo_pb.ts:478

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 8;

#### Defined in

src/qc_samples.scailo_pb.ts:499

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/qc_samples.scailo_pb.ts:522

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/qc_samples.scailo_pb.ts:520

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCSamplesServiceUpdateRequest"``

#### Defined in

src/qc_samples.scailo_pb.ts:521

## Methods

### clone

▸ **clone**(): [`QCSamplesServiceUpdateRequest`](QCSamplesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`QCSamplesServiceUpdateRequest`](QCSamplesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QCSamplesServiceUpdateRequest`](QCSamplesServiceUpdateRequest.md) \| `PlainMessage`\<[`QCSamplesServiceUpdateRequest`](QCSamplesServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCSamplesServiceUpdateRequest`](QCSamplesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCSamplesServiceUpdateRequest`](QCSamplesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`QCSamplesServiceUpdateRequest`](QCSamplesServiceUpdateRequest.md) \| `PlainMessage`\<[`QCSamplesServiceUpdateRequest`](QCSamplesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`QCSamplesServiceUpdateRequest`](QCSamplesServiceUpdateRequest.md) \| `PlainMessage`\<[`QCSamplesServiceUpdateRequest`](QCSamplesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/qc_samples.scailo_pb.ts:543

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCSamplesServiceUpdateRequest`](QCSamplesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCSamplesServiceUpdateRequest`](QCSamplesServiceUpdateRequest.md)

#### Defined in

src/qc_samples.scailo_pb.ts:531

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCSamplesServiceUpdateRequest`](QCSamplesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSamplesServiceUpdateRequest`](QCSamplesServiceUpdateRequest.md)

#### Defined in

src/qc_samples.scailo_pb.ts:535

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCSamplesServiceUpdateRequest`](QCSamplesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSamplesServiceUpdateRequest`](QCSamplesServiceUpdateRequest.md)

#### Defined in

src/qc_samples.scailo_pb.ts:539
