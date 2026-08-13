[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StoresServiceSearchAllReq

# Class: StoresServiceSearchAllReq

Broad-spectrum search and lookup request for locating and paginating stores via text matching.
This message encapsulates full-text query parameters, pagination controls, sorting keys,
lifecycle status constraints, and other core references.

**Note:** This is the primary message layout used for global search bars, fast-filtering dashboard
inputs, and omni-box search utilities where users need to match loose textual terms against
records while retaining structural pagination.

**`Generated`**

from message Scailo.StoresServiceSearchAllReq

## Hierarchy

- `Message`\<[`StoresServiceSearchAllReq`](StoresServiceSearchAllReq.md)\>

  ↳ **`StoresServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](StoresServiceSearchAllReq.md#constructor)

### Properties

- [count](StoresServiceSearchAllReq.md#count)
- [entityUuid](StoresServiceSearchAllReq.md#entityuuid)
- [isActive](StoresServiceSearchAllReq.md#isactive)
- [locationId](StoresServiceSearchAllReq.md#locationid)
- [offset](StoresServiceSearchAllReq.md#offset)
- [searchKey](StoresServiceSearchAllReq.md#searchkey)
- [sortKey](StoresServiceSearchAllReq.md#sortkey)
- [sortOrder](StoresServiceSearchAllReq.md#sortorder)
- [status](StoresServiceSearchAllReq.md#status)
- [fields](StoresServiceSearchAllReq.md#fields)
- [runtime](StoresServiceSearchAllReq.md#runtime)
- [typeName](StoresServiceSearchAllReq.md#typename)

### Methods

- [clone](StoresServiceSearchAllReq.md#clone)
- [equals](StoresServiceSearchAllReq.md#equals)
- [fromBinary](StoresServiceSearchAllReq.md#frombinary)
- [fromJson](StoresServiceSearchAllReq.md#fromjson)
- [fromJsonString](StoresServiceSearchAllReq.md#fromjsonstring)
- [getType](StoresServiceSearchAllReq.md#gettype)
- [toBinary](StoresServiceSearchAllReq.md#tobinary)
- [toJSON](StoresServiceSearchAllReq.md#tojson)
- [toJson](StoresServiceSearchAllReq.md#tojson-1)
- [toJsonString](StoresServiceSearchAllReq.md#tojsonstring)
- [equals](StoresServiceSearchAllReq.md#equals-1)
- [fromBinary](StoresServiceSearchAllReq.md#frombinary-1)
- [fromJson](StoresServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](StoresServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new StoresServiceSearchAllReq**(`data?`): [`StoresServiceSearchAllReq`](StoresServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StoresServiceSearchAllReq`](StoresServiceSearchAllReq.md)\> |

#### Returns

[`StoresServiceSearchAllReq`](StoresServiceSearchAllReq.md)

#### Overrides

Message\&lt;StoresServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/stores.scailo_pb.ts:1551](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stores.scailo_pb.ts#L1551)

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

[src/stores.scailo_pb.ts:1451](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stores.scailo_pb.ts#L1451)

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

[src/stores.scailo_pb.ts:1505](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stores.scailo_pb.ts#L1505)

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

[src/stores.scailo_pb.ts:1435](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stores.scailo_pb.ts#L1435)

___

### locationId

• `Optional` **locationId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the geographic or logical location under which this store is situated.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]*$

**`Format`**

Non-negative 64-bit integer greater than zero.

**`Generated`**

from field: optional uint64 location_id = 12;

#### Defined in

[src/stores.scailo_pb.ts:1549](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stores.scailo_pb.ts#L1549)

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

[src/stores.scailo_pb.ts:1467](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stores.scailo_pb.ts#L1467)

___

### searchKey

• `Optional` **searchKey**: `string`

**`Mandatory`**

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

[src/stores.scailo_pb.ts:1533](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stores.scailo_pb.ts#L1533)

___

### sortKey

• `Optional` **sortKey**: [`STORE_SORT_KEY`](../enums/STORE_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.STORE_SORT_KEY sort_key = 5;

#### Defined in

[src/stores.scailo_pb.ts:1489](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stores.scailo_pb.ts#L1489)

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

[src/stores.scailo_pb.ts:1479](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stores.scailo_pb.ts#L1479)

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

[src/stores.scailo_pb.ts:1517](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stores.scailo_pb.ts#L1517)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stores.scailo_pb.ts:1558](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stores.scailo_pb.ts#L1558)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stores.scailo_pb.ts:1556](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stores.scailo_pb.ts#L1556)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StoresServiceSearchAllReq"``

#### Defined in

[src/stores.scailo_pb.ts:1557](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stores.scailo_pb.ts#L1557)

## Methods

### clone

▸ **clone**(): [`StoresServiceSearchAllReq`](StoresServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`StoresServiceSearchAllReq`](StoresServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`StoresServiceSearchAllReq`](StoresServiceSearchAllReq.md) \| `PlainMessage`\<[`StoresServiceSearchAllReq`](StoresServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`StoresServiceSearchAllReq`](StoresServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StoresServiceSearchAllReq`](StoresServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`StoresServiceSearchAllReq`](StoresServiceSearchAllReq.md) \| `PlainMessage`\<[`StoresServiceSearchAllReq`](StoresServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`StoresServiceSearchAllReq`](StoresServiceSearchAllReq.md) \| `PlainMessage`\<[`StoresServiceSearchAllReq`](StoresServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stores.scailo_pb.ts:1582](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stores.scailo_pb.ts#L1582)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StoresServiceSearchAllReq`](StoresServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StoresServiceSearchAllReq`](StoresServiceSearchAllReq.md)

#### Defined in

[src/stores.scailo_pb.ts:1570](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stores.scailo_pb.ts#L1570)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StoresServiceSearchAllReq`](StoresServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoresServiceSearchAllReq`](StoresServiceSearchAllReq.md)

#### Defined in

[src/stores.scailo_pb.ts:1574](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stores.scailo_pb.ts#L1574)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StoresServiceSearchAllReq`](StoresServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoresServiceSearchAllReq`](StoresServiceSearchAllReq.md)

#### Defined in

[src/stores.scailo_pb.ts:1578](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stores.scailo_pb.ts#L1578)
