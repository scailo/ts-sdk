[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCGroupsServiceUpdateRequest

# Class: QCGroupsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.QCGroupsServiceUpdateRequest

## Hierarchy

- `Message`\<[`QCGroupsServiceUpdateRequest`](QCGroupsServiceUpdateRequest.md)\>

  ↳ **`QCGroupsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](QCGroupsServiceUpdateRequest.md#constructor)

### Properties

- [code](QCGroupsServiceUpdateRequest.md#code)
- [description](QCGroupsServiceUpdateRequest.md#description)
- [formData](QCGroupsServiceUpdateRequest.md#formdata)
- [id](QCGroupsServiceUpdateRequest.md#id)
- [name](QCGroupsServiceUpdateRequest.md#name)
- [notifyUsers](QCGroupsServiceUpdateRequest.md#notifyusers)
- [userComment](QCGroupsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](QCGroupsServiceUpdateRequest.md#vaultfolderid)
- [fields](QCGroupsServiceUpdateRequest.md#fields)
- [runtime](QCGroupsServiceUpdateRequest.md#runtime)
- [typeName](QCGroupsServiceUpdateRequest.md#typename)

### Methods

- [clone](QCGroupsServiceUpdateRequest.md#clone)
- [equals](QCGroupsServiceUpdateRequest.md#equals)
- [fromBinary](QCGroupsServiceUpdateRequest.md#frombinary)
- [fromJson](QCGroupsServiceUpdateRequest.md#fromjson)
- [fromJsonString](QCGroupsServiceUpdateRequest.md#fromjsonstring)
- [getType](QCGroupsServiceUpdateRequest.md#gettype)
- [toBinary](QCGroupsServiceUpdateRequest.md#tobinary)
- [toJSON](QCGroupsServiceUpdateRequest.md#tojson)
- [toJson](QCGroupsServiceUpdateRequest.md#tojson-1)
- [toJsonString](QCGroupsServiceUpdateRequest.md#tojsonstring)
- [equals](QCGroupsServiceUpdateRequest.md#equals-1)
- [fromBinary](QCGroupsServiceUpdateRequest.md#frombinary-1)
- [fromJson](QCGroupsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](QCGroupsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCGroupsServiceUpdateRequest**(`data?`): [`QCGroupsServiceUpdateRequest`](QCGroupsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCGroupsServiceUpdateRequest`](QCGroupsServiceUpdateRequest.md)\> |

#### Returns

[`QCGroupsServiceUpdateRequest`](QCGroupsServiceUpdateRequest.md)

#### Overrides

Message\&lt;QCGroupsServiceUpdateRequest\&gt;.constructor

#### Defined in

src/qc_groups.scailo_pb.ts:408

## Properties

### code

• **code**: `string` = `""`

The qc group code

**`Generated`**

from field: string code = 11;

#### Defined in

src/qc_groups.scailo_pb.ts:392

___

### description

• **description**: `string` = `""`

The description of the qc group

**`Generated`**

from field: string description = 13;

#### Defined in

src/qc_groups.scailo_pb.ts:399

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/qc_groups.scailo_pb.ts:406

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/qc_groups.scailo_pb.ts:364

___

### name

• **name**: `string` = `""`

The name of the qc group

**`Generated`**

from field: string name = 10;

#### Defined in

src/qc_groups.scailo_pb.ts:385

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

src/qc_groups.scailo_pb.ts:371

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/qc_groups.scailo_pb.ts:357

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/qc_groups.scailo_pb.ts:378

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/qc_groups.scailo_pb.ts:415

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/qc_groups.scailo_pb.ts:413

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCGroupsServiceUpdateRequest"``

#### Defined in

src/qc_groups.scailo_pb.ts:414

## Methods

### clone

▸ **clone**(): [`QCGroupsServiceUpdateRequest`](QCGroupsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`QCGroupsServiceUpdateRequest`](QCGroupsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QCGroupsServiceUpdateRequest`](QCGroupsServiceUpdateRequest.md) \| `PlainMessage`\<[`QCGroupsServiceUpdateRequest`](QCGroupsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCGroupsServiceUpdateRequest`](QCGroupsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCGroupsServiceUpdateRequest`](QCGroupsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`QCGroupsServiceUpdateRequest`](QCGroupsServiceUpdateRequest.md) \| `PlainMessage`\<[`QCGroupsServiceUpdateRequest`](QCGroupsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`QCGroupsServiceUpdateRequest`](QCGroupsServiceUpdateRequest.md) \| `PlainMessage`\<[`QCGroupsServiceUpdateRequest`](QCGroupsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/qc_groups.scailo_pb.ts:438

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCGroupsServiceUpdateRequest`](QCGroupsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCGroupsServiceUpdateRequest`](QCGroupsServiceUpdateRequest.md)

#### Defined in

src/qc_groups.scailo_pb.ts:426

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCGroupsServiceUpdateRequest`](QCGroupsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceUpdateRequest`](QCGroupsServiceUpdateRequest.md)

#### Defined in

src/qc_groups.scailo_pb.ts:430

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCGroupsServiceUpdateRequest`](QCGroupsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceUpdateRequest`](QCGroupsServiceUpdateRequest.md)

#### Defined in

src/qc_groups.scailo_pb.ts:434
