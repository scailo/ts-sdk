[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchItemsSearchRequest

# Class: GoodsDispatchItemsSearchRequest

Request payload structure used to search and filter Goods Dispatch Item records.
Supports pagination controls, tenancy isolation, status grouping, and text-based matching.

**`Generated`**

from message Scailo.GoodsDispatchItemsSearchRequest

## Hierarchy

- `Message`\<[`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md)\>

  ↳ **`GoodsDispatchItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](GoodsDispatchItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](GoodsDispatchItemsSearchRequest.md#approvedonend)
- [approvedOnStart](GoodsDispatchItemsSearchRequest.md#approvedonstart)
- [approverRoleId](GoodsDispatchItemsSearchRequest.md#approverroleid)
- [clientFamilyCode](GoodsDispatchItemsSearchRequest.md#clientfamilycode)
- [clientUomId](GoodsDispatchItemsSearchRequest.md#clientuomid)
- [count](GoodsDispatchItemsSearchRequest.md#count)
- [entityUuid](GoodsDispatchItemsSearchRequest.md#entityuuid)
- [familyId](GoodsDispatchItemsSearchRequest.md#familyid)
- [goodsDispatchId](GoodsDispatchItemsSearchRequest.md#goodsdispatchid)
- [isActive](GoodsDispatchItemsSearchRequest.md#isactive)
- [itemHash](GoodsDispatchItemsSearchRequest.md#itemhash)
- [offset](GoodsDispatchItemsSearchRequest.md#offset)
- [searchKey](GoodsDispatchItemsSearchRequest.md#searchkey)
- [sortKey](GoodsDispatchItemsSearchRequest.md#sortkey)
- [sortOrder](GoodsDispatchItemsSearchRequest.md#sortorder)
- [status](GoodsDispatchItemsSearchRequest.md#status)
- [fields](GoodsDispatchItemsSearchRequest.md#fields)
- [runtime](GoodsDispatchItemsSearchRequest.md#runtime)
- [typeName](GoodsDispatchItemsSearchRequest.md#typename)

### Methods

- [clone](GoodsDispatchItemsSearchRequest.md#clone)
- [equals](GoodsDispatchItemsSearchRequest.md#equals)
- [fromBinary](GoodsDispatchItemsSearchRequest.md#frombinary)
- [fromJson](GoodsDispatchItemsSearchRequest.md#fromjson)
- [fromJsonString](GoodsDispatchItemsSearchRequest.md#fromjsonstring)
- [getType](GoodsDispatchItemsSearchRequest.md#gettype)
- [toBinary](GoodsDispatchItemsSearchRequest.md#tobinary)
- [toJSON](GoodsDispatchItemsSearchRequest.md#tojson)
- [toJson](GoodsDispatchItemsSearchRequest.md#tojson-1)
- [toJsonString](GoodsDispatchItemsSearchRequest.md#tojsonstring)
- [equals](GoodsDispatchItemsSearchRequest.md#equals-1)
- [fromBinary](GoodsDispatchItemsSearchRequest.md#frombinary-1)
- [fromJson](GoodsDispatchItemsSearchRequest.md#fromjson-1)
- [fromJsonString](GoodsDispatchItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchItemsSearchRequest**(`data?`): [`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md)\> |

#### Returns

[`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md)

#### Overrides

Message\&lt;GoodsDispatchItemsSearchRequest\&gt;.constructor

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2161](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L2161)

## Properties

### approvedByUserId

• `Optional` **approvedByUserId**: `bigint`

**`Optional`**

**`Description`**

Filter by the specific user ID who approved the records.

**`Example`**

```ts
501
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approved_by_user_id = 12;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2047](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L2047)

___

### approvedOnEnd

• `Optional` **approvedOnEnd**: `bigint`

**`Optional`**

**`Description`**

Filter records approved ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approved_on_end = 11;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2031](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L2031)

___

### approvedOnStart

• `Optional` **approvedOnStart**: `bigint`

**`Optional`**

**`Description`**

Filter records approved ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approved_on_start = 10;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2015](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L2015)

___

### approverRoleId

• `Optional` **approverRoleId**: `bigint`

**`Optional`**

**`Description`**

Filter by the role ID of the approver.

**`Example`**

```ts
5
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approver_role_id = 13;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2063](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L2063)

___

### clientFamilyCode

• `Optional` **clientFamilyCode**: `string`

**`Optional`**

**`Description`**

Fuzzy match for the client's specific alphanumeric part number, SKU, or family code.

**`Example`**

```ts
"CLI-SKU-992"
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string client_family_code = 26;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2143](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L2143)

___

### clientUomId

• `Optional` **clientUomId**: `bigint`

**`Optional`**

**`Description`**

Filter line items requesting a specific client Unit of Measure (UOM).

**`Example`**

```ts
12
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 client_uom_id = 24;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2127](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L2127)

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

[src/goods_dispatches.scailo_pb.ts:1935](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L1935)

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

[src/goods_dispatches.scailo_pb.ts:1989](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L1989)

___

### familyId

• `Optional` **familyId**: `bigint`

**`Optional`**

**`Description`**

Filter line items belonging to a specific family.

**`Example`**

```ts
505
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 family_id = 22;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2095](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L2095)

___

### goodsDispatchId

• `Optional` **goodsDispatchId**: `bigint`

**`Optional`**

**`Description`**

Filter line items belonging to a specific parent goods dispatch.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 goods_dispatch_id = 20;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2079](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L2079)

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

[src/goods_dispatches.scailo_pb.ts:1919](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L1919)

___

### itemHash

• `Optional` **itemHash**: `string`

**`Optional`**

**`Description`**

Filter line items by the cryptographic hash representing the exact inventory instance, batch, or serial pool being dispatched.

**`Example`**

```ts
"a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2"
```

**`Regex`**

^.{128}$

**`Format`**

Exact 128-character string.

**`Generated`**

from field: optional string item_hash = 23;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2111](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L2111)

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

[src/goods_dispatches.scailo_pb.ts:1951](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L1951)

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

from field: optional string search_key = 40;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2159](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L2159)

___

### sortKey

• `Optional` **sortKey**: [`GOODS_DISPATCH_ITEM_SORT_KEY`](../enums/GOODS_DISPATCH_ITEM_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.GOODS_DISPATCH_ITEM_SORT_KEY sort_key = 5;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1973](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L1973)

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

[src/goods_dispatches.scailo_pb.ts:1963](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L1963)

___

### status

• `Optional` **status**: [`GOODS_DISPATCH_ITEM_STATUS`](../enums/GOODS_DISPATCH_ITEM_STATUS.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.GOODS_DISPATCH_ITEM_STATUS status = 7;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1999](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L1999)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2168](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L2168)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2166](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L2166)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsDispatchItemsSearchRequest"``

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2167](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L2167)

## Methods

### clone

▸ **clone**(): [`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md) \| `PlainMessage`\<[`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md) \| `PlainMessage`\<[`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md) \| `PlainMessage`\<[`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2200](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L2200)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2188](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L2188)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2192](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L2192)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2196](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_dispatches.scailo_pb.ts#L2196)
