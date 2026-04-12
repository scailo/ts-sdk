[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductionPlansServiceSearchAllReq

# Class: ProductionPlansServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.ProductionPlansServiceSearchAllReq

## Hierarchy

- `Message`\<[`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)\>

  ↳ **`ProductionPlansServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](ProductionPlansServiceSearchAllReq.md#constructor)

### Properties

- [count](ProductionPlansServiceSearchAllReq.md#count)
- [entityUuid](ProductionPlansServiceSearchAllReq.md#entityuuid)
- [isActive](ProductionPlansServiceSearchAllReq.md#isactive)
- [locationId](ProductionPlansServiceSearchAllReq.md#locationid)
- [offset](ProductionPlansServiceSearchAllReq.md#offset)
- [refFrom](ProductionPlansServiceSearchAllReq.md#reffrom)
- [refId](ProductionPlansServiceSearchAllReq.md#refid)
- [searchKey](ProductionPlansServiceSearchAllReq.md#searchkey)
- [sortKey](ProductionPlansServiceSearchAllReq.md#sortkey)
- [sortOrder](ProductionPlansServiceSearchAllReq.md#sortorder)
- [status](ProductionPlansServiceSearchAllReq.md#status)
- [supervisor](ProductionPlansServiceSearchAllReq.md#supervisor)
- [fields](ProductionPlansServiceSearchAllReq.md#fields)
- [runtime](ProductionPlansServiceSearchAllReq.md#runtime)
- [typeName](ProductionPlansServiceSearchAllReq.md#typename)

### Methods

- [clone](ProductionPlansServiceSearchAllReq.md#clone)
- [equals](ProductionPlansServiceSearchAllReq.md#equals)
- [fromBinary](ProductionPlansServiceSearchAllReq.md#frombinary)
- [fromJson](ProductionPlansServiceSearchAllReq.md#fromjson)
- [fromJsonString](ProductionPlansServiceSearchAllReq.md#fromjsonstring)
- [getType](ProductionPlansServiceSearchAllReq.md#gettype)
- [toBinary](ProductionPlansServiceSearchAllReq.md#tobinary)
- [toJSON](ProductionPlansServiceSearchAllReq.md#tojson)
- [toJson](ProductionPlansServiceSearchAllReq.md#tojson-1)
- [toJsonString](ProductionPlansServiceSearchAllReq.md#tojsonstring)
- [equals](ProductionPlansServiceSearchAllReq.md#equals-1)
- [fromBinary](ProductionPlansServiceSearchAllReq.md#frombinary-1)
- [fromJson](ProductionPlansServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](ProductionPlansServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionPlansServiceSearchAllReq**(`data?`): [`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)\> |

#### Returns

[`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)

#### Overrides

Message\&lt;ProductionPlansServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/production_plans.scailo_pb.ts:2473](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/production_plans.scailo_pb.ts#L2473)

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

[src/production_plans.scailo_pb.ts:2361](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/production_plans.scailo_pb.ts#L2361)

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

[src/production_plans.scailo_pb.ts:2415](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/production_plans.scailo_pb.ts#L2415)

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

[src/production_plans.scailo_pb.ts:2345](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/production_plans.scailo_pb.ts#L2345)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 24;

#### Defined in

[src/production_plans.scailo_pb.ts:2464](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/production_plans.scailo_pb.ts#L2464)

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

[src/production_plans.scailo_pb.ts:2377](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/production_plans.scailo_pb.ts#L2377)

___

### refFrom

• **refFrom**: [`PRODUCTION_PLAN_REF_FROM`](../enums/PRODUCTION_PLAN_REF_FROM.md) = `PRODUCTION_PLAN_REF_FROM.PRODUCTION_PLAN_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.PRODUCTION_PLAN_REF_FROM ref_from = 22;

#### Defined in

[src/production_plans.scailo_pb.ts:2450](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/production_plans.scailo_pb.ts#L2450)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/production_plans.scailo_pb.ts:2457](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/production_plans.scailo_pb.ts#L2457)

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

[src/production_plans.scailo_pb.ts:2443](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/production_plans.scailo_pb.ts#L2443)

___

### sortKey

• **sortKey**: [`PRODUCTION_PLAN_SORT_KEY`](../enums/PRODUCTION_PLAN_SORT_KEY.md) = `PRODUCTION_PLAN_SORT_KEY.PRODUCTION_PLAN_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.PRODUCTION_PLAN_SORT_KEY sort_key = 5;

#### Defined in

[src/production_plans.scailo_pb.ts:2399](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/production_plans.scailo_pb.ts#L2399)

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

[src/production_plans.scailo_pb.ts:2389](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/production_plans.scailo_pb.ts#L2389)

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

[src/production_plans.scailo_pb.ts:2427](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/production_plans.scailo_pb.ts#L2427)

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 25;

#### Defined in

[src/production_plans.scailo_pb.ts:2471](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/production_plans.scailo_pb.ts#L2471)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_plans.scailo_pb.ts:2480](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/production_plans.scailo_pb.ts#L2480)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_plans.scailo_pb.ts:2478](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/production_plans.scailo_pb.ts#L2478)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductionPlansServiceSearchAllReq"``

#### Defined in

[src/production_plans.scailo_pb.ts:2479](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/production_plans.scailo_pb.ts#L2479)

## Methods

### clone

▸ **clone**(): [`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md) \| `PlainMessage`\<[`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md) \| `PlainMessage`\<[`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md) \| `PlainMessage`\<[`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_plans.scailo_pb.ts:2507](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/production_plans.scailo_pb.ts#L2507)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)

#### Defined in

[src/production_plans.scailo_pb.ts:2495](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/production_plans.scailo_pb.ts#L2495)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)

#### Defined in

[src/production_plans.scailo_pb.ts:2499](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/production_plans.scailo_pb.ts#L2499)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceSearchAllReq`](ProductionPlansServiceSearchAllReq.md)

#### Defined in

[src/production_plans.scailo_pb.ts:2503](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/production_plans.scailo_pb.ts#L2503)
