[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StoragesServiceSearchAllReq

# Class: StoragesServiceSearchAllReq

Broad-spectrum search and lookup request for locating and paginating storages via text matching.
This message encapsulates full-text query parameters, pagination controls, sorting keys,
lifecycle status constraints, and other core references.

**Note:** This is the primary message layout used for global search bars, fast-filtering dashboard
inputs, and omni-box search utilities where users need to match loose textual terms against
records while retaining structural pagination.

**`Generated`**

from message Scailo.StoragesServiceSearchAllReq

## Hierarchy

- `Message`\<[`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md)\>

  ↳ **`StoragesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](StoragesServiceSearchAllReq.md#constructor)

### Properties

- [count](StoragesServiceSearchAllReq.md#count)
- [entityUuid](StoragesServiceSearchAllReq.md#entityuuid)
- [familyId](StoragesServiceSearchAllReq.md#familyid)
- [isActive](StoragesServiceSearchAllReq.md#isactive)
- [isLeaf](StoragesServiceSearchAllReq.md#isleaf)
- [offset](StoragesServiceSearchAllReq.md#offset)
- [parentStorageId](StoragesServiceSearchAllReq.md#parentstorageid)
- [searchKey](StoragesServiceSearchAllReq.md#searchkey)
- [sortKey](StoragesServiceSearchAllReq.md#sortkey)
- [sortOrder](StoragesServiceSearchAllReq.md#sortorder)
- [status](StoragesServiceSearchAllReq.md#status)
- [storeId](StoragesServiceSearchAllReq.md#storeid)
- [fields](StoragesServiceSearchAllReq.md#fields)
- [runtime](StoragesServiceSearchAllReq.md#runtime)
- [typeName](StoragesServiceSearchAllReq.md#typename)

### Methods

- [clone](StoragesServiceSearchAllReq.md#clone)
- [equals](StoragesServiceSearchAllReq.md#equals)
- [fromBinary](StoragesServiceSearchAllReq.md#frombinary)
- [fromJson](StoragesServiceSearchAllReq.md#fromjson)
- [fromJsonString](StoragesServiceSearchAllReq.md#fromjsonstring)
- [getType](StoragesServiceSearchAllReq.md#gettype)
- [toBinary](StoragesServiceSearchAllReq.md#tobinary)
- [toJSON](StoragesServiceSearchAllReq.md#tojson)
- [toJson](StoragesServiceSearchAllReq.md#tojson-1)
- [toJsonString](StoragesServiceSearchAllReq.md#tojsonstring)
- [equals](StoragesServiceSearchAllReq.md#equals-1)
- [fromBinary](StoragesServiceSearchAllReq.md#frombinary-1)
- [fromJson](StoragesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](StoragesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new StoragesServiceSearchAllReq**(`data?`): [`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md)\> |

#### Returns

[`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md)

#### Overrides

Message\&lt;StoragesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/storages.scailo_pb.ts:1642](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1642)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.

**`Example`**

```ts
100
```

**`Regex`**

^(?:-1|0|[1-9][0-9]*)$

**`Format`**

Must be -1 or any non-negative integer (>= -1).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/storages.scailo_pb.ts:1496](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1496)

___

### entityUuid

• `Optional` **entityUuid**: `string`

**`Optional`**

**`Description`**

Filter by the organization UUID.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: optional string entity_uuid = 6;

#### Defined in

[src/storages.scailo_pb.ts:1550](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1550)

___

### familyId

• `Optional` **familyId**: `bigint`

**`Optional`**

**`Description`**

Filter results to retrieve only the storages that are assigned to a specific item family or classification group identifier.

**`Example`**

```ts
7890
```

**`Regex`**

^[0-9]*$

**`Format`**

Non-negative 64-bit integer.

**`Generated`**

from field: optional uint64 family_id = 30;

#### Defined in

[src/storages.scailo_pb.ts:1640](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1640)

___

### isActive

• `Optional` **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/storages.scailo_pb.ts:1480](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1480)

___

### isLeaf

• `Optional` **isLeaf**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

Flag determining whether this storage node is a terminal 'leaf' allocation (e.g., a specific shelf/bin holding stock) or a 'non-leaf' grouping structure (e.g., a whole aisle).

**`Example`**

```ts
true
```

**`Format`**

Boolean value (`true` or `false`).

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_leaf = 24;

#### Defined in

[src/storages.scailo_pb.ts:1624](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1624)

___

### offset

• `Optional` **offset**: `bigint`

**`Optional`**

**`Description`**

Number of records to skip (offset) for pagination.

**`Example`**

```ts
0
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 offset = 3;

#### Defined in

[src/storages.scailo_pb.ts:1512](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1512)

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

^[0-9]*$

**`Format`**

Non-negative 64-bit integer.

**`Generated`**

from field: optional uint64 parent_storage_id = 23;

#### Defined in

[src/storages.scailo_pb.ts:1610](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1610)

___

### searchKey

• `Optional` **searchKey**: `string`

**`Optional`**

**`Description`**

The search string to match against reference IDs.

**`Example`**

```ts
"Medical 2023"
```

**`Regex`**

.*

@format: May contain any UTF-8 characters.

**`Generated`**

from field: optional string search_key = 11;

#### Defined in

[src/storages.scailo_pb.ts:1578](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1578)

___

### sortKey

• `Optional` **sortKey**: [`STORAGE_SORT_KEY`](../enums/STORAGE_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.STORAGE_SORT_KEY sort_key = 5;

#### Defined in

[src/storages.scailo_pb.ts:1534](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1534)

___

### sortOrder

• `Optional` **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md)

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: optional Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/storages.scailo_pb.ts:1524](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1524)

___

### status

• `Optional` **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md)

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/storages.scailo_pb.ts:1562](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1562)

___

### storeId

• `Optional` **storeId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the overarching parent store facility housing this storage unit.

**`Example`**

```ts
4501
```

**`Regex`**

^[0-9]*$

**`Format`**

Non-negative 64-bit integer greater than zero.

**`Generated`**

from field: optional uint64 store_id = 22;

#### Defined in

[src/storages.scailo_pb.ts:1594](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1594)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/storages.scailo_pb.ts:1649](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1649)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/storages.scailo_pb.ts:1647](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1647)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StoragesServiceSearchAllReq"``

#### Defined in

[src/storages.scailo_pb.ts:1648](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1648)

## Methods

### clone

▸ **clone**(): [`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md) \| `PlainMessage`\<[`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md) \| `PlainMessage`\<[`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md) \| `PlainMessage`\<[`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/storages.scailo_pb.ts:1676](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1676)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md)

#### Defined in

[src/storages.scailo_pb.ts:1664](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1664)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md)

#### Defined in

[src/storages.scailo_pb.ts:1668](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1668)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoragesServiceSearchAllReq`](StoragesServiceSearchAllReq.md)

#### Defined in

[src/storages.scailo_pb.ts:1672](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/storages.scailo_pb.ts#L1672)
