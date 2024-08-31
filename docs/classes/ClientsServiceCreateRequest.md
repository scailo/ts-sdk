[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientsServiceCreateRequest

# Class: ClientsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.ClientsServiceCreateRequest

## Hierarchy

- `Message`\<[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)\>

  ↳ **`ClientsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](ClientsServiceCreateRequest.md#constructor)

### Properties

- [code](ClientsServiceCreateRequest.md#code)
- [email](ClientsServiceCreateRequest.md#email)
- [entityUuid](ClientsServiceCreateRequest.md#entityuuid)
- [formData](ClientsServiceCreateRequest.md#formdata)
- [name](ClientsServiceCreateRequest.md#name)
- [phone](ClientsServiceCreateRequest.md#phone)
- [userComment](ClientsServiceCreateRequest.md#usercomment)
- [vaultFolderId](ClientsServiceCreateRequest.md#vaultfolderid)
- [fields](ClientsServiceCreateRequest.md#fields)
- [runtime](ClientsServiceCreateRequest.md#runtime)
- [typeName](ClientsServiceCreateRequest.md#typename)

### Methods

- [clone](ClientsServiceCreateRequest.md#clone)
- [equals](ClientsServiceCreateRequest.md#equals)
- [fromBinary](ClientsServiceCreateRequest.md#frombinary)
- [fromJson](ClientsServiceCreateRequest.md#fromjson)
- [fromJsonString](ClientsServiceCreateRequest.md#fromjsonstring)
- [getType](ClientsServiceCreateRequest.md#gettype)
- [toBinary](ClientsServiceCreateRequest.md#tobinary)
- [toJSON](ClientsServiceCreateRequest.md#tojson)
- [toJson](ClientsServiceCreateRequest.md#tojson-1)
- [toJsonString](ClientsServiceCreateRequest.md#tojsonstring)
- [equals](ClientsServiceCreateRequest.md#equals-1)
- [fromBinary](ClientsServiceCreateRequest.md#frombinary-1)
- [fromJson](ClientsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](ClientsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientsServiceCreateRequest**(`data?`): [`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)\> |

#### Returns

[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)

#### Overrides

Message\&lt;ClientsServiceCreateRequest\&gt;.constructor

#### Defined in

src/clients.scailo_pb.ts:200

## Properties

### code

• **code**: `string` = `""`

The unique code by which the client is classified

**`Generated`**

from field: string code = 11;

#### Defined in

src/clients.scailo_pb.ts:177

___

### email

• **email**: `string` = `""`

The primary email of the client

**`Generated`**

from field: string email = 12;

#### Defined in

src/clients.scailo_pb.ts:184

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/clients.scailo_pb.ts:149

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/clients.scailo_pb.ts:198

___

### name

• **name**: `string` = `""`

The name of the client

**`Generated`**

from field: string name = 10;

#### Defined in

src/clients.scailo_pb.ts:170

___

### phone

• **phone**: `string` = `""`

The primary contact number of the client

**`Generated`**

from field: string phone = 13;

#### Defined in

src/clients.scailo_pb.ts:191

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/clients.scailo_pb.ts:156

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/clients.scailo_pb.ts:163

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/clients.scailo_pb.ts:207

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/clients.scailo_pb.ts:205

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientsServiceCreateRequest"``

#### Defined in

src/clients.scailo_pb.ts:206

## Methods

### clone

▸ **clone**(): [`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md) \| `PlainMessage`\<[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md) \| `PlainMessage`\<[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md) \| `PlainMessage`\<[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/clients.scailo_pb.ts:230

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)

#### Defined in

src/clients.scailo_pb.ts:218

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)

#### Defined in

src/clients.scailo_pb.ts:222

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)

#### Defined in

src/clients.scailo_pb.ts:226
