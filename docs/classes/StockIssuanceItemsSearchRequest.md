[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StockIssuanceItemsSearchRequest

# Class: StockIssuanceItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.StockIssuanceItemsSearchRequest

## Hierarchy

- `Message`\<[`StockIssuanceItemsSearchRequest`](StockIssuanceItemsSearchRequest.md)\>

  ↳ **`StockIssuanceItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](StockIssuanceItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](StockIssuanceItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](StockIssuanceItemsSearchRequest.md#approvedonend)
- [approvedOnStart](StockIssuanceItemsSearchRequest.md#approvedonstart)
- [approverRoleId](StockIssuanceItemsSearchRequest.md#approverroleid)
- [count](StockIssuanceItemsSearchRequest.md#count)
- [entityUuid](StockIssuanceItemsSearchRequest.md#entityuuid)
- [familyId](StockIssuanceItemsSearchRequest.md#familyid)
- [isActive](StockIssuanceItemsSearchRequest.md#isactive)
- [itemHash](StockIssuanceItemsSearchRequest.md#itemhash)
- [offset](StockIssuanceItemsSearchRequest.md#offset)
- [searchKey](StockIssuanceItemsSearchRequest.md#searchkey)
- [sortKey](StockIssuanceItemsSearchRequest.md#sortkey)
- [sortOrder](StockIssuanceItemsSearchRequest.md#sortorder)
- [status](StockIssuanceItemsSearchRequest.md#status)
- [stockIssuanceId](StockIssuanceItemsSearchRequest.md#stockissuanceid)
- [fields](StockIssuanceItemsSearchRequest.md#fields)
- [runtime](StockIssuanceItemsSearchRequest.md#runtime)
- [typeName](StockIssuanceItemsSearchRequest.md#typename)

### Methods

- [clone](StockIssuanceItemsSearchRequest.md#clone)
- [equals](StockIssuanceItemsSearchRequest.md#equals)
- [fromBinary](StockIssuanceItemsSearchRequest.md#frombinary)
- [fromJson](StockIssuanceItemsSearchRequest.md#fromjson)
- [fromJsonString](StockIssuanceItemsSearchRequest.md#fromjsonstring)
- [getType](StockIssuanceItemsSearchRequest.md#gettype)
- [toBinary](StockIssuanceItemsSearchRequest.md#tobinary)
- [toJSON](StockIssuanceItemsSearchRequest.md#tojson)
- [toJson](StockIssuanceItemsSearchRequest.md#tojson-1)
- [toJsonString](StockIssuanceItemsSearchRequest.md#tojsonstring)
- [equals](StockIssuanceItemsSearchRequest.md#equals-1)
- [fromBinary](StockIssuanceItemsSearchRequest.md#frombinary-1)
- [fromJson](StockIssuanceItemsSearchRequest.md#fromjson-1)
- [fromJsonString](StockIssuanceItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockIssuanceItemsSearchRequest**(`data?`): [`StockIssuanceItemsSearchRequest`](StockIssuanceItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockIssuanceItemsSearchRequest`](StockIssuanceItemsSearchRequest.md)\> |

#### Returns

[`StockIssuanceItemsSearchRequest`](StockIssuanceItemsSearchRequest.md)

#### Overrides

Message\&lt;StockIssuanceItemsSearchRequest\&gt;.constructor

#### Defined in

[src/stock_issuances.scailo_pb.ts:2488](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L2488)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

[src/stock_issuances.scailo_pb.ts:2451](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L2451)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

[src/stock_issuances.scailo_pb.ts:2444](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L2444)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

[src/stock_issuances.scailo_pb.ts:2437](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L2437)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

[src/stock_issuances.scailo_pb.ts:2458](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L2458)

___

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

[src/stock_issuances.scailo_pb.ts:2369](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L2369)

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

[src/stock_issuances.scailo_pb.ts:2423](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L2423)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 21;

#### Defined in

[src/stock_issuances.scailo_pb.ts:2472](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L2472)

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

[src/stock_issuances.scailo_pb.ts:2353](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L2353)

___

### itemHash

• **itemHash**: `string` = `""`

Stores the item hash

**`Generated`**

from field: string item_hash = 22;

#### Defined in

[src/stock_issuances.scailo_pb.ts:2479](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L2479)

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

[src/stock_issuances.scailo_pb.ts:2385](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L2385)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

[src/stock_issuances.scailo_pb.ts:2486](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L2486)

___

### sortKey

• **sortKey**: [`STOCK_ISSUANCE_ITEM_SORT_KEY`](../enums/STOCK_ISSUANCE_ITEM_SORT_KEY.md) = `STOCK_ISSUANCE_ITEM_SORT_KEY.STOCK_ISSUANCE_ITEM_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.STOCK_ISSUANCE_ITEM_SORT_KEY sort_key = 5;

#### Defined in

[src/stock_issuances.scailo_pb.ts:2407](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L2407)

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

[src/stock_issuances.scailo_pb.ts:2397](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L2397)

___

### status

• **status**: [`STOCK_ISSUANCE_ITEM_STATUS`](../enums/STOCK_ISSUANCE_ITEM_STATUS.md) = `STOCK_ISSUANCE_ITEM_STATUS.STOCK_ISSUANCE_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.STOCK_ISSUANCE_ITEM_STATUS status = 7;

#### Defined in

[src/stock_issuances.scailo_pb.ts:2430](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L2430)

___

### stockIssuanceId

• **stockIssuanceId**: `bigint` = `protoInt64.zero`

The ID of the stock issuance

**`Generated`**

from field: uint64 stock_issuance_id = 20;

#### Defined in

[src/stock_issuances.scailo_pb.ts:2465](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L2465)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_issuances.scailo_pb.ts:2495](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L2495)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_issuances.scailo_pb.ts:2493](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L2493)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockIssuanceItemsSearchRequest"``

#### Defined in

[src/stock_issuances.scailo_pb.ts:2494](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L2494)

## Methods

### clone

▸ **clone**(): [`StockIssuanceItemsSearchRequest`](StockIssuanceItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`StockIssuanceItemsSearchRequest`](StockIssuanceItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`StockIssuanceItemsSearchRequest`](StockIssuanceItemsSearchRequest.md) \| `PlainMessage`\<[`StockIssuanceItemsSearchRequest`](StockIssuanceItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockIssuanceItemsSearchRequest`](StockIssuanceItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockIssuanceItemsSearchRequest`](StockIssuanceItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`StockIssuanceItemsSearchRequest`](StockIssuanceItemsSearchRequest.md) \| `PlainMessage`\<[`StockIssuanceItemsSearchRequest`](StockIssuanceItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`StockIssuanceItemsSearchRequest`](StockIssuanceItemsSearchRequest.md) \| `PlainMessage`\<[`StockIssuanceItemsSearchRequest`](StockIssuanceItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_issuances.scailo_pb.ts:2525](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L2525)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockIssuanceItemsSearchRequest`](StockIssuanceItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockIssuanceItemsSearchRequest`](StockIssuanceItemsSearchRequest.md)

#### Defined in

[src/stock_issuances.scailo_pb.ts:2513](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L2513)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockIssuanceItemsSearchRequest`](StockIssuanceItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockIssuanceItemsSearchRequest`](StockIssuanceItemsSearchRequest.md)

#### Defined in

[src/stock_issuances.scailo_pb.ts:2517](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L2517)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockIssuanceItemsSearchRequest`](StockIssuanceItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockIssuanceItemsSearchRequest`](StockIssuanceItemsSearchRequest.md)

#### Defined in

[src/stock_issuances.scailo_pb.ts:2521](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/stock_issuances.scailo_pb.ts#L2521)
