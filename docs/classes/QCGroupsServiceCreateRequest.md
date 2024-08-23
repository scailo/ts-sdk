[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / QCGroupsServiceCreateRequest

# Class: QCGroupsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.QCGroupsServiceCreateRequest

## Hierarchy

- `Message`\<[`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md)\>

  ↳ **`QCGroupsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](QCGroupsServiceCreateRequest.md#constructor)

### Properties

- [code](QCGroupsServiceCreateRequest.md#code)
- [description](QCGroupsServiceCreateRequest.md#description)
- [entityUuid](QCGroupsServiceCreateRequest.md#entityuuid)
- [formData](QCGroupsServiceCreateRequest.md#formdata)
- [name](QCGroupsServiceCreateRequest.md#name)
- [userComment](QCGroupsServiceCreateRequest.md#usercomment)
- [vaultFolderId](QCGroupsServiceCreateRequest.md#vaultfolderid)
- [fields](QCGroupsServiceCreateRequest.md#fields)
- [runtime](QCGroupsServiceCreateRequest.md#runtime)
- [typeName](QCGroupsServiceCreateRequest.md#typename)

### Methods

- [clone](QCGroupsServiceCreateRequest.md#clone)
- [equals](QCGroupsServiceCreateRequest.md#equals)
- [fromBinary](QCGroupsServiceCreateRequest.md#frombinary)
- [fromJson](QCGroupsServiceCreateRequest.md#fromjson)
- [fromJsonString](QCGroupsServiceCreateRequest.md#fromjsonstring)
- [getType](QCGroupsServiceCreateRequest.md#gettype)
- [toBinary](QCGroupsServiceCreateRequest.md#tobinary)
- [toJSON](QCGroupsServiceCreateRequest.md#tojson)
- [toJson](QCGroupsServiceCreateRequest.md#tojson-1)
- [toJsonString](QCGroupsServiceCreateRequest.md#tojsonstring)
- [equals](QCGroupsServiceCreateRequest.md#equals-1)
- [fromBinary](QCGroupsServiceCreateRequest.md#frombinary-1)
- [fromJson](QCGroupsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](QCGroupsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCGroupsServiceCreateRequest**(`data?`): [`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md)\> |

#### Returns

[`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md)

#### Overrides

Message\&lt;QCGroupsServiceCreateRequest\&gt;.constructor

#### Defined in

src/qc_groups.scailo_pb.ts:185

## Properties

### code

• **code**: `string` = `""`

The qc group code

**`Generated`**

from field: string code = 11;

#### Defined in

src/qc_groups.scailo_pb.ts:169

___

### description

• **description**: `string` = `""`

The description of the qc group

**`Generated`**

from field: string description = 13;

#### Defined in

src/qc_groups.scailo_pb.ts:176

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/qc_groups.scailo_pb.ts:141

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/qc_groups.scailo_pb.ts:183

___

### name

• **name**: `string` = `""`

The name of the qc group

**`Generated`**

from field: string name = 10;

#### Defined in

src/qc_groups.scailo_pb.ts:162

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/qc_groups.scailo_pb.ts:148

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/qc_groups.scailo_pb.ts:155

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/qc_groups.scailo_pb.ts:192

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/qc_groups.scailo_pb.ts:190

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCGroupsServiceCreateRequest"``

#### Defined in

src/qc_groups.scailo_pb.ts:191

## Methods

### clone

▸ **clone**(): [`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md) \| `PlainMessage`\<[`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md) \| `PlainMessage`\<[`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md) \| `PlainMessage`\<[`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/qc_groups.scailo_pb.ts:214

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md)

#### Defined in

src/qc_groups.scailo_pb.ts:202

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md)

#### Defined in

src/qc_groups.scailo_pb.ts:206

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceCreateRequest`](QCGroupsServiceCreateRequest.md)

#### Defined in

src/qc_groups.scailo_pb.ts:210
