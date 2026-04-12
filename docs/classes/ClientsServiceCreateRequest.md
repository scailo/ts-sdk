[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientsServiceCreateRequest

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

[src/clients.scailo_pb.ts:218](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L218)

## Properties

### code

• **code**: `string` = `""`

The unique code by which the client is classified

**`Generated`**

from field: string code = 11;

#### Defined in

[src/clients.scailo_pb.ts:195](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L195)

___

### email

• **email**: `string` = `""`

The primary email of the client

**`Generated`**

from field: string email = 12;

#### Defined in

[src/clients.scailo_pb.ts:202](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L202)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

The globally unique identifier for the Organization or Business Entity.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/clients.scailo_pb.ts:158](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L158)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/clients.scailo_pb.ts:216](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L216)

___

### name

• **name**: `string` = `""`

The name of the client

**`Generated`**

from field: string name = 10;

#### Defined in

[src/clients.scailo_pb.ts:188](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L188)

___

### phone

• **phone**: `string` = `""`

The primary contact number of the client

**`Generated`**

from field: string phone = 13;

#### Defined in

[src/clients.scailo_pb.ts:209](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L209)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/clients.scailo_pb.ts:165](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L165)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

The ID of the associated vault folder for storing documents. Defaults to 0 if no specific folder is assigned.

**`Example`**

```ts
15234
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/clients.scailo_pb.ts:181](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L181)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/clients.scailo_pb.ts:225](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L225)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/clients.scailo_pb.ts:223](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L223)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientsServiceCreateRequest"``

#### Defined in

[src/clients.scailo_pb.ts:224](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L224)

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

[src/clients.scailo_pb.ts:248](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L248)

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

[src/clients.scailo_pb.ts:236](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L236)

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

[src/clients.scailo_pb.ts:240](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L240)

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

[src/clients.scailo_pb.ts:244](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/clients.scailo_pb.ts#L244)
