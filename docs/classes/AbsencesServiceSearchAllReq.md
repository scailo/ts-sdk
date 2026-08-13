[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AbsencesServiceSearchAllReq

# Class: AbsencesServiceSearchAllReq

Broad-spectrum search and lookup request for locating and paginating absences via text matching.
This message encapsulates full-text query parameters, pagination controls, sorting keys,
lifecycle status constraints, and other core references.

**Note:** This is the primary message layout used for global search bars, fast-filtering dashboard
inputs, and omni-box search utilities where users need to match loose textual terms against
records while retaining structural pagination.

**`Generated`**

from message Scailo.AbsencesServiceSearchAllReq

## Hierarchy

- `Message`\<[`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)\>

  ↳ **`AbsencesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](AbsencesServiceSearchAllReq.md#constructor)

### Properties

- [count](AbsencesServiceSearchAllReq.md#count)
- [entityUuid](AbsencesServiceSearchAllReq.md#entityuuid)
- [isActive](AbsencesServiceSearchAllReq.md#isactive)
- [offset](AbsencesServiceSearchAllReq.md#offset)
- [searchKey](AbsencesServiceSearchAllReq.md#searchkey)
- [sortKey](AbsencesServiceSearchAllReq.md#sortkey)
- [sortOrder](AbsencesServiceSearchAllReq.md#sortorder)
- [status](AbsencesServiceSearchAllReq.md#status)
- [userId](AbsencesServiceSearchAllReq.md#userid)
- [fields](AbsencesServiceSearchAllReq.md#fields)
- [runtime](AbsencesServiceSearchAllReq.md#runtime)
- [typeName](AbsencesServiceSearchAllReq.md#typename)

### Methods

- [clone](AbsencesServiceSearchAllReq.md#clone)
- [equals](AbsencesServiceSearchAllReq.md#equals)
- [fromBinary](AbsencesServiceSearchAllReq.md#frombinary)
- [fromJson](AbsencesServiceSearchAllReq.md#fromjson)
- [fromJsonString](AbsencesServiceSearchAllReq.md#fromjsonstring)
- [getType](AbsencesServiceSearchAllReq.md#gettype)
- [toBinary](AbsencesServiceSearchAllReq.md#tobinary)
- [toJSON](AbsencesServiceSearchAllReq.md#tojson)
- [toJson](AbsencesServiceSearchAllReq.md#tojson-1)
- [toJsonString](AbsencesServiceSearchAllReq.md#tojsonstring)
- [equals](AbsencesServiceSearchAllReq.md#equals-1)
- [fromBinary](AbsencesServiceSearchAllReq.md#frombinary-1)
- [fromJson](AbsencesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](AbsencesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AbsencesServiceSearchAllReq**(`data?`): [`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)\> |

#### Returns

[`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)

#### Overrides

Message\&lt;AbsencesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/absences.scailo_pb.ts:2147](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L2147)

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

[src/absences.scailo_pb.ts:2047](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L2047)

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

[src/absences.scailo_pb.ts:2101](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L2101)

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

[src/absences.scailo_pb.ts:2031](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L2031)

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

[src/absences.scailo_pb.ts:2063](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L2063)

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

[src/absences.scailo_pb.ts:2129](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L2129)

___

### sortKey

• `Optional` **sortKey**: [`ABSENCE_SORT_KEY`](../enums/ABSENCE_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.ABSENCE_SORT_KEY sort_key = 5;

#### Defined in

[src/absences.scailo_pb.ts:2085](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L2085)

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

[src/absences.scailo_pb.ts:2075](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L2075)

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

[src/absences.scailo_pb.ts:2113](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L2113)

___

### userId

• `Optional` **userId**: `bigint`

**`Optional`**

**`Description`**

Limit search results to a specific employee ID.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 user_id = 22;

#### Defined in

[src/absences.scailo_pb.ts:2145](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L2145)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/absences.scailo_pb.ts:2154](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L2154)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/absences.scailo_pb.ts:2152](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L2152)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AbsencesServiceSearchAllReq"``

#### Defined in

[src/absences.scailo_pb.ts:2153](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L2153)

## Methods

### clone

▸ **clone**(): [`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md) \| `PlainMessage`\<[`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md) \| `PlainMessage`\<[`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md) \| `PlainMessage`\<[`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/absences.scailo_pb.ts:2178](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L2178)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)

#### Defined in

[src/absences.scailo_pb.ts:2166](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L2166)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)

#### Defined in

[src/absences.scailo_pb.ts:2170](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L2170)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AbsencesServiceSearchAllReq`](AbsencesServiceSearchAllReq.md)

#### Defined in

[src/absences.scailo_pb.ts:2174](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L2174)
