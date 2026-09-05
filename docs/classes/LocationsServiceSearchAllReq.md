[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LocationsServiceSearchAllReq

# Class: LocationsServiceSearchAllReq

Broad-spectrum search and lookup request for locating and paginating locations via text matching.
This message encapsulates full-text query parameters, pagination controls, sorting keys,
lifecycle status constraints, and other core references.

**Note:** This is the primary message layout used for global search bars, fast-filtering dashboard
inputs, and omni-box search utilities where users need to match loose textual terms against
records while retaining structural pagination.

**`Generated`**

from message Scailo.LocationsServiceSearchAllReq

## Hierarchy

- `Message`\<[`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)\>

  ↳ **`LocationsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](LocationsServiceSearchAllReq.md#constructor)

### Properties

- [count](LocationsServiceSearchAllReq.md#count)
- [entityUuid](LocationsServiceSearchAllReq.md#entityuuid)
- [isActive](LocationsServiceSearchAllReq.md#isactive)
- [isLeaf](LocationsServiceSearchAllReq.md#isleaf)
- [offset](LocationsServiceSearchAllReq.md#offset)
- [parentLocationId](LocationsServiceSearchAllReq.md#parentlocationid)
- [searchKey](LocationsServiceSearchAllReq.md#searchkey)
- [sortKey](LocationsServiceSearchAllReq.md#sortkey)
- [sortOrder](LocationsServiceSearchAllReq.md#sortorder)
- [status](LocationsServiceSearchAllReq.md#status)
- [fields](LocationsServiceSearchAllReq.md#fields)
- [runtime](LocationsServiceSearchAllReq.md#runtime)
- [typeName](LocationsServiceSearchAllReq.md#typename)

### Methods

- [clone](LocationsServiceSearchAllReq.md#clone)
- [equals](LocationsServiceSearchAllReq.md#equals)
- [fromBinary](LocationsServiceSearchAllReq.md#frombinary)
- [fromJson](LocationsServiceSearchAllReq.md#fromjson)
- [fromJsonString](LocationsServiceSearchAllReq.md#fromjsonstring)
- [getType](LocationsServiceSearchAllReq.md#gettype)
- [toBinary](LocationsServiceSearchAllReq.md#tobinary)
- [toJSON](LocationsServiceSearchAllReq.md#tojson)
- [toJson](LocationsServiceSearchAllReq.md#tojson-1)
- [toJsonString](LocationsServiceSearchAllReq.md#tojsonstring)
- [equals](LocationsServiceSearchAllReq.md#equals-1)
- [fromBinary](LocationsServiceSearchAllReq.md#frombinary-1)
- [fromJson](LocationsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](LocationsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LocationsServiceSearchAllReq**(`data?`): [`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)\> |

#### Returns

[`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)

#### Overrides

Message\&lt;LocationsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/locations.scailo_pb.ts:1719](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1719)

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

[src/locations.scailo_pb.ts:1605](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1605)

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

[src/locations.scailo_pb.ts:1659](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1659)

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

[src/locations.scailo_pb.ts:1589](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1589)

___

### isLeaf

• `Optional` **isLeaf**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

Flag determining whether this location is a terminal 'leaf' node (e.g., a specific office room) or a 'non-leaf' grouping node (e.g., an entire region or campus).

**`Example`**

```ts
true
```

**`Format`**

Boolean value (`true` or `false`).

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_leaf = 25;

#### Defined in

[src/locations.scailo_pb.ts:1717](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1717)

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

[src/locations.scailo_pb.ts:1621](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1621)

___

### parentLocationId

• `Optional` **parentLocationId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the parent non-leaf location. Defaults to 0 if this is the root or top-level node in the geographic hierarchy.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]*$

**`Format`**

Non-negative 64-bit integer.

**`Generated`**

from field: optional uint64 parent_location_id = 24;

#### Defined in

[src/locations.scailo_pb.ts:1703](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1703)

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

[src/locations.scailo_pb.ts:1687](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1687)

___

### sortKey

• `Optional` **sortKey**: [`LOCATION_SORT_KEY`](../enums/LOCATION_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.LOCATION_SORT_KEY sort_key = 5;

#### Defined in

[src/locations.scailo_pb.ts:1643](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1643)

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

[src/locations.scailo_pb.ts:1633](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1633)

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

[src/locations.scailo_pb.ts:1671](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1671)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/locations.scailo_pb.ts:1726](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1726)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/locations.scailo_pb.ts:1724](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1724)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LocationsServiceSearchAllReq"``

#### Defined in

[src/locations.scailo_pb.ts:1725](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1725)

## Methods

### clone

▸ **clone**(): [`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md) \| `PlainMessage`\<[`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md) \| `PlainMessage`\<[`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md) \| `PlainMessage`\<[`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/locations.scailo_pb.ts:1751](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1751)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)

#### Defined in

[src/locations.scailo_pb.ts:1739](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1739)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)

#### Defined in

[src/locations.scailo_pb.ts:1743](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1743)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LocationsServiceSearchAllReq`](LocationsServiceSearchAllReq.md)

#### Defined in

[src/locations.scailo_pb.ts:1747](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1747)
