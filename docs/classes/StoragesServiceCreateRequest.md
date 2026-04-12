[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StoragesServiceCreateRequest

# Class: StoragesServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.StoragesServiceCreateRequest

## Hierarchy

- `Message`\<[`StoragesServiceCreateRequest`](StoragesServiceCreateRequest.md)\>

  ↳ **`StoragesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](StoragesServiceCreateRequest.md#constructor)

### Properties

- [code](StoragesServiceCreateRequest.md#code)
- [description](StoragesServiceCreateRequest.md#description)
- [entityUuid](StoragesServiceCreateRequest.md#entityuuid)
- [isLeaf](StoragesServiceCreateRequest.md#isleaf)
- [name](StoragesServiceCreateRequest.md#name)
- [parentStorageId](StoragesServiceCreateRequest.md#parentstorageid)
- [storeId](StoragesServiceCreateRequest.md#storeid)
- [userComment](StoragesServiceCreateRequest.md#usercomment)
- [fields](StoragesServiceCreateRequest.md#fields)
- [runtime](StoragesServiceCreateRequest.md#runtime)
- [typeName](StoragesServiceCreateRequest.md#typename)

### Methods

- [clone](StoragesServiceCreateRequest.md#clone)
- [equals](StoragesServiceCreateRequest.md#equals)
- [fromBinary](StoragesServiceCreateRequest.md#frombinary)
- [fromJson](StoragesServiceCreateRequest.md#fromjson)
- [fromJsonString](StoragesServiceCreateRequest.md#fromjsonstring)
- [getType](StoragesServiceCreateRequest.md#gettype)
- [toBinary](StoragesServiceCreateRequest.md#tobinary)
- [toJSON](StoragesServiceCreateRequest.md#tojson)
- [toJson](StoragesServiceCreateRequest.md#tojson-1)
- [toJsonString](StoragesServiceCreateRequest.md#tojsonstring)
- [equals](StoragesServiceCreateRequest.md#equals-1)
- [fromBinary](StoragesServiceCreateRequest.md#frombinary-1)
- [fromJson](StoragesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](StoragesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new StoragesServiceCreateRequest**(`data?`): [`StoragesServiceCreateRequest`](StoragesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StoragesServiceCreateRequest`](StoragesServiceCreateRequest.md)\> |

#### Returns

[`StoragesServiceCreateRequest`](StoragesServiceCreateRequest.md)

#### Overrides

Message\&lt;StoragesServiceCreateRequest\&gt;.constructor

#### Defined in

[src/storages.scailo_pb.ts:157](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/storages.scailo_pb.ts#L157)

## Properties

### code

• **code**: `string` = `""`

The unique code by which the storage is classified

**`Generated`**

from field: string code = 11;

#### Defined in

[src/storages.scailo_pb.ts:127](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/storages.scailo_pb.ts#L127)

___

### description

• **description**: `string` = `""`

The description of the storage

**`Generated`**

from field: string description = 15;

#### Defined in

[src/storages.scailo_pb.ts:155](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/storages.scailo_pb.ts#L155)

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

[src/storages.scailo_pb.ts:106](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/storages.scailo_pb.ts#L106)

___

### isLeaf

• **isLeaf**: `boolean` = `false`

Stores if this is a leaf storage or a non-leaf storage

**`Generated`**

from field: bool is_leaf = 14;

#### Defined in

[src/storages.scailo_pb.ts:148](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/storages.scailo_pb.ts#L148)

___

### name

• **name**: `string` = `""`

The name of the storage

**`Generated`**

from field: string name = 10;

#### Defined in

[src/storages.scailo_pb.ts:120](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/storages.scailo_pb.ts#L120)

___

### parentStorageId

• **parentStorageId**: `bigint` = `protoInt64.zero`

The ID of the associated non-leaf parent storage (0, if the first storage that is being created is a leaf storage)

**`Generated`**

from field: uint64 parent_storage_id = 13;

#### Defined in

[src/storages.scailo_pb.ts:141](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/storages.scailo_pb.ts#L141)

___

### storeId

• **storeId**: `bigint` = `protoInt64.zero`

The ID of the associated store

**`Generated`**

from field: uint64 store_id = 12;

#### Defined in

[src/storages.scailo_pb.ts:134](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/storages.scailo_pb.ts#L134)

___

### userComment

• **userComment**: `string` = `""`

Storages any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/storages.scailo_pb.ts:113](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/storages.scailo_pb.ts#L113)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/storages.scailo_pb.ts:164](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/storages.scailo_pb.ts#L164)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/storages.scailo_pb.ts:162](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/storages.scailo_pb.ts#L162)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StoragesServiceCreateRequest"``

#### Defined in

[src/storages.scailo_pb.ts:163](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/storages.scailo_pb.ts#L163)

## Methods

### clone

▸ **clone**(): [`StoragesServiceCreateRequest`](StoragesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`StoragesServiceCreateRequest`](StoragesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`StoragesServiceCreateRequest`](StoragesServiceCreateRequest.md) \| `PlainMessage`\<[`StoragesServiceCreateRequest`](StoragesServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`StoragesServiceCreateRequest`](StoragesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StoragesServiceCreateRequest`](StoragesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`StoragesServiceCreateRequest`](StoragesServiceCreateRequest.md) \| `PlainMessage`\<[`StoragesServiceCreateRequest`](StoragesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`StoragesServiceCreateRequest`](StoragesServiceCreateRequest.md) \| `PlainMessage`\<[`StoragesServiceCreateRequest`](StoragesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/storages.scailo_pb.ts:187](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/storages.scailo_pb.ts#L187)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StoragesServiceCreateRequest`](StoragesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StoragesServiceCreateRequest`](StoragesServiceCreateRequest.md)

#### Defined in

[src/storages.scailo_pb.ts:175](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/storages.scailo_pb.ts#L175)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StoragesServiceCreateRequest`](StoragesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoragesServiceCreateRequest`](StoragesServiceCreateRequest.md)

#### Defined in

[src/storages.scailo_pb.ts:179](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/storages.scailo_pb.ts#L179)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StoragesServiceCreateRequest`](StoragesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoragesServiceCreateRequest`](StoragesServiceCreateRequest.md)

#### Defined in

[src/storages.scailo_pb.ts:183](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/storages.scailo_pb.ts#L183)
