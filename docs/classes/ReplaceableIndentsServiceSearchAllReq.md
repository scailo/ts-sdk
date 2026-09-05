[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ReplaceableIndentsServiceSearchAllReq

# Class: ReplaceableIndentsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.ReplaceableIndentsServiceSearchAllReq

## Hierarchy

- `Message`\<[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)\>

  ↳ **`ReplaceableIndentsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](ReplaceableIndentsServiceSearchAllReq.md#constructor)

### Properties

- [count](ReplaceableIndentsServiceSearchAllReq.md#count)
- [entityUuid](ReplaceableIndentsServiceSearchAllReq.md#entityuuid)
- [familyId](ReplaceableIndentsServiceSearchAllReq.md#familyid)
- [isActive](ReplaceableIndentsServiceSearchAllReq.md#isactive)
- [itemHash](ReplaceableIndentsServiceSearchAllReq.md#itemhash)
- [locationId](ReplaceableIndentsServiceSearchAllReq.md#locationid)
- [offset](ReplaceableIndentsServiceSearchAllReq.md#offset)
- [searchKey](ReplaceableIndentsServiceSearchAllReq.md#searchkey)
- [sortKey](ReplaceableIndentsServiceSearchAllReq.md#sortkey)
- [sortOrder](ReplaceableIndentsServiceSearchAllReq.md#sortorder)
- [status](ReplaceableIndentsServiceSearchAllReq.md#status)
- [supervisor](ReplaceableIndentsServiceSearchAllReq.md#supervisor)
- [fields](ReplaceableIndentsServiceSearchAllReq.md#fields)
- [runtime](ReplaceableIndentsServiceSearchAllReq.md#runtime)
- [typeName](ReplaceableIndentsServiceSearchAllReq.md#typename)

### Methods

- [clone](ReplaceableIndentsServiceSearchAllReq.md#clone)
- [equals](ReplaceableIndentsServiceSearchAllReq.md#equals)
- [fromBinary](ReplaceableIndentsServiceSearchAllReq.md#frombinary)
- [fromJson](ReplaceableIndentsServiceSearchAllReq.md#fromjson)
- [fromJsonString](ReplaceableIndentsServiceSearchAllReq.md#fromjsonstring)
- [getType](ReplaceableIndentsServiceSearchAllReq.md#gettype)
- [toBinary](ReplaceableIndentsServiceSearchAllReq.md#tobinary)
- [toJSON](ReplaceableIndentsServiceSearchAllReq.md#tojson)
- [toJson](ReplaceableIndentsServiceSearchAllReq.md#tojson-1)
- [toJsonString](ReplaceableIndentsServiceSearchAllReq.md#tojsonstring)
- [equals](ReplaceableIndentsServiceSearchAllReq.md#equals-1)
- [fromBinary](ReplaceableIndentsServiceSearchAllReq.md#frombinary-1)
- [fromJson](ReplaceableIndentsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](ReplaceableIndentsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ReplaceableIndentsServiceSearchAllReq**(`data?`): [`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)\> |

#### Returns

[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)

#### Overrides

Message\&lt;ReplaceableIndentsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2268](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/replaceable_indents.scailo_pb.ts#L2268)

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

[src/replaceable_indents.scailo_pb.ts:2156](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/replaceable_indents.scailo_pb.ts#L2156)

___

### entityUuid

• **entityUuid**: `string` = `""`

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

from field: string entity_uuid = 6;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2210](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/replaceable_indents.scailo_pb.ts#L2210)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 25;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2259](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/replaceable_indents.scailo_pb.ts#L2259)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2140](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/replaceable_indents.scailo_pb.ts#L2140)

___

### itemHash

• **itemHash**: `string` = `""`

The hash of the inventory item

**`Generated`**

from field: string item_hash = 26;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2266](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/replaceable_indents.scailo_pb.ts#L2266)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 23;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2245](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/replaceable_indents.scailo_pb.ts#L2245)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

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

from field: uint64 offset = 3;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2172](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/replaceable_indents.scailo_pb.ts#L2172)

___

### searchKey

• **searchKey**: `string` = `""`

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

from field: string search_key = 11;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2238](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/replaceable_indents.scailo_pb.ts#L2238)

___

### sortKey

• **sortKey**: [`REPLACEABLE_INDENT_SORT_KEY`](../enums/REPLACEABLE_INDENT_SORT_KEY.md) = `REPLACEABLE_INDENT_SORT_KEY.REPLACEABLE_INDENT_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.REPLACEABLE_INDENT_SORT_KEY sort_key = 5;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2194](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/replaceable_indents.scailo_pb.ts#L2194)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2184](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/replaceable_indents.scailo_pb.ts#L2184)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2222](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/replaceable_indents.scailo_pb.ts#L2222)

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 24;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2252](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/replaceable_indents.scailo_pb.ts#L2252)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2275](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/replaceable_indents.scailo_pb.ts#L2275)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2273](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/replaceable_indents.scailo_pb.ts#L2273)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ReplaceableIndentsServiceSearchAllReq"``

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2274](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/replaceable_indents.scailo_pb.ts#L2274)

## Methods

### clone

▸ **clone**(): [`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md) \| `PlainMessage`\<[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md) \| `PlainMessage`\<[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md) \| `PlainMessage`\<[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2302](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/replaceable_indents.scailo_pb.ts#L2302)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2290](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/replaceable_indents.scailo_pb.ts#L2290)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2294](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/replaceable_indents.scailo_pb.ts#L2294)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2298](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/replaceable_indents.scailo_pb.ts#L2298)
