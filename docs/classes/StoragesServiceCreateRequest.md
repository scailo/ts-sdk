[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StoragesServiceCreateRequest

# Class: StoragesServiceCreateRequest

Request message for creating and registering a new Storage unit or sub-location.
This record maps hierarchical storage structures (leaf vs. non-leaf zones), parent store
associations, unique classification codes, and multi-tenant security identifiers.

**Note:** This is the primary entry point for Inventory, Logistics, and Admins to
configure physical or logical storage layouts like warehouses, aisles, shelves, or bins.

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

[src/storages.scailo_pb.ts:223](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L223)

## Properties

### code

• **code**: `string` = `""`

**`Mandatory`**

**`Description`**

The unique code or internal alphanumeric token used to classify the storage unit for inventory tracking.

**`Example`**

```ts
"STRG-CS-A01"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string code = 11;

#### Defined in

[src/storages.scailo_pb.ts:159](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L159)

___

### description

• `Optional` **description**: `string`

**`Optional`**

**`Description`**

Contextual details concerning environmental constraints, structural capacities, or unique access instructions for this storage unit.

**`Example`**

```ts
"Maintained at temperature thresholds between 2-4°C. Holds standard pharmaceutical pallets."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string description = 15;

#### Defined in

[src/storages.scailo_pb.ts:221](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L221)

___

### entityUuid

• `Optional` **entityUuid**: `string`

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

from field: optional string entity_uuid = 1;

#### Defined in

[src/storages.scailo_pb.ts:111](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L111)

___

### isLeaf

• **isLeaf**: `boolean` = `false`

**`Mandatory`**

**`Description`**

Flag determining whether this storage node is a terminal 'leaf' allocation (e.g., a specific shelf/bin holding stock) or a 'non-leaf' grouping structure (e.g., a whole aisle).

**`Example`**

```ts
true
```

**`Format`**

Boolean value (`true` or `false`).

**`Generated`**

from field: bool is_leaf = 14;

#### Defined in

[src/storages.scailo_pb.ts:205](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L205)

___

### name

• **name**: `string` = `""`

**`Mandatory`**

**`Description`**

The official or friendly descriptive name of the storage zone or unit.

**`Example`**

```ts
"Cold Storage Vault Alpha"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string name = 10;

#### Defined in

[src/storages.scailo_pb.ts:143](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L143)

___

### parentStorageId

• `Optional` **parentStorageId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the parent non-leaf storage unit. Defaults to 0 if this is the root node or top-level layer within the storage area.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative 64-bit integer.

**`Generated`**

from field: optional uint64 parent_storage_id = 13;

#### Defined in

[src/storages.scailo_pb.ts:191](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L191)

___

### storeId

• **storeId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the overarching parent store facility housing this storage unit.

**`Example`**

```ts
4501
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative 64-bit integer greater than zero.

**`Generated`**

from field: uint64 store_id = 12;

#### Defined in

[src/storages.scailo_pb.ts:175](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L175)

___

### userComment

• `Optional` **userComment**: `string`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string user_comment = 2;

#### Defined in

[src/storages.scailo_pb.ts:127](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L127)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/storages.scailo_pb.ts:230](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L230)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/storages.scailo_pb.ts:228](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L228)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StoragesServiceCreateRequest"``

#### Defined in

[src/storages.scailo_pb.ts:229](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L229)

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

[src/storages.scailo_pb.ts:253](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L253)

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

[src/storages.scailo_pb.ts:241](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L241)

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

[src/storages.scailo_pb.ts:245](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L245)

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

[src/storages.scailo_pb.ts:249](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L249)
