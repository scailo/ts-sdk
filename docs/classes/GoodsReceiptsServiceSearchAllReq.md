[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsReceiptsServiceSearchAllReq

# Class: GoodsReceiptsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.GoodsReceiptsServiceSearchAllReq

## Hierarchy

- `Message`\<[`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)\>

  ↳ **`GoodsReceiptsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](GoodsReceiptsServiceSearchAllReq.md#constructor)

### Properties

- [billingStatus](GoodsReceiptsServiceSearchAllReq.md#billingstatus)
- [count](GoodsReceiptsServiceSearchAllReq.md#count)
- [entityUuid](GoodsReceiptsServiceSearchAllReq.md#entityuuid)
- [isActive](GoodsReceiptsServiceSearchAllReq.md#isactive)
- [offset](GoodsReceiptsServiceSearchAllReq.md#offset)
- [refFrom](GoodsReceiptsServiceSearchAllReq.md#reffrom)
- [refId](GoodsReceiptsServiceSearchAllReq.md#refid)
- [searchKey](GoodsReceiptsServiceSearchAllReq.md#searchkey)
- [sortKey](GoodsReceiptsServiceSearchAllReq.md#sortkey)
- [sortOrder](GoodsReceiptsServiceSearchAllReq.md#sortorder)
- [status](GoodsReceiptsServiceSearchAllReq.md#status)
- [vendorId](GoodsReceiptsServiceSearchAllReq.md#vendorid)
- [fields](GoodsReceiptsServiceSearchAllReq.md#fields)
- [runtime](GoodsReceiptsServiceSearchAllReq.md#runtime)
- [typeName](GoodsReceiptsServiceSearchAllReq.md#typename)

### Methods

- [clone](GoodsReceiptsServiceSearchAllReq.md#clone)
- [equals](GoodsReceiptsServiceSearchAllReq.md#equals)
- [fromBinary](GoodsReceiptsServiceSearchAllReq.md#frombinary)
- [fromJson](GoodsReceiptsServiceSearchAllReq.md#fromjson)
- [fromJsonString](GoodsReceiptsServiceSearchAllReq.md#fromjsonstring)
- [getType](GoodsReceiptsServiceSearchAllReq.md#gettype)
- [toBinary](GoodsReceiptsServiceSearchAllReq.md#tobinary)
- [toJSON](GoodsReceiptsServiceSearchAllReq.md#tojson)
- [toJson](GoodsReceiptsServiceSearchAllReq.md#tojson-1)
- [toJsonString](GoodsReceiptsServiceSearchAllReq.md#tojsonstring)
- [equals](GoodsReceiptsServiceSearchAllReq.md#equals-1)
- [fromBinary](GoodsReceiptsServiceSearchAllReq.md#frombinary-1)
- [fromJson](GoodsReceiptsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](GoodsReceiptsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsReceiptsServiceSearchAllReq**(`data?`): [`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)\> |

#### Returns

[`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)

#### Overrides

Message\&lt;GoodsReceiptsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/goods_receipts.scailo_pb.ts:3024](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_receipts.scailo_pb.ts#L3024)

## Properties

### billingStatus

• **billingStatus**: [`GOODS_RECEIPT_BILLING_STATUS`](../enums/GOODS_RECEIPT_BILLING_STATUS.md) = `GOODS_RECEIPT_BILLING_STATUS.GOODS_RECEIPT_BILLING_STATUS_ANY_UNSPECIFIED`

The status of the goods receipt bill

**`Generated`**

from field: Scailo.GOODS_RECEIPT_BILLING_STATUS billing_status = 40;

#### Defined in

[src/goods_receipts.scailo_pb.ts:3015](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_receipts.scailo_pb.ts#L3015)

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

[src/goods_receipts.scailo_pb.ts:2912](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_receipts.scailo_pb.ts#L2912)

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

[src/goods_receipts.scailo_pb.ts:2966](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_receipts.scailo_pb.ts#L2966)

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

[src/goods_receipts.scailo_pb.ts:2896](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_receipts.scailo_pb.ts#L2896)

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

[src/goods_receipts.scailo_pb.ts:2928](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_receipts.scailo_pb.ts#L2928)

___

### refFrom

• **refFrom**: [`GOODS_RECEIPT_REF_FROM`](../enums/GOODS_RECEIPT_REF_FROM.md) = `GOODS_RECEIPT_REF_FROM.GOODS_RECEIPT_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.GOODS_RECEIPT_REF_FROM ref_from = 22;

#### Defined in

[src/goods_receipts.scailo_pb.ts:3001](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_receipts.scailo_pb.ts#L3001)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/goods_receipts.scailo_pb.ts:3008](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_receipts.scailo_pb.ts#L3008)

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

[src/goods_receipts.scailo_pb.ts:2994](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_receipts.scailo_pb.ts#L2994)

___

### sortKey

• **sortKey**: [`GOODS_RECEIPT_SORT_KEY`](../enums/GOODS_RECEIPT_SORT_KEY.md) = `GOODS_RECEIPT_SORT_KEY.GOODS_RECEIPT_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.GOODS_RECEIPT_SORT_KEY sort_key = 5;

#### Defined in

[src/goods_receipts.scailo_pb.ts:2950](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_receipts.scailo_pb.ts#L2950)

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

[src/goods_receipts.scailo_pb.ts:2940](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_receipts.scailo_pb.ts#L2940)

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

[src/goods_receipts.scailo_pb.ts:2978](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_receipts.scailo_pb.ts#L2978)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor

**`Generated`**

from field: uint64 vendor_id = 50;

#### Defined in

[src/goods_receipts.scailo_pb.ts:3022](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_receipts.scailo_pb.ts#L3022)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_receipts.scailo_pb.ts:3031](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_receipts.scailo_pb.ts#L3031)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_receipts.scailo_pb.ts:3029](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_receipts.scailo_pb.ts#L3029)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsReceiptsServiceSearchAllReq"``

#### Defined in

[src/goods_receipts.scailo_pb.ts:3030](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_receipts.scailo_pb.ts#L3030)

## Methods

### clone

▸ **clone**(): [`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md) \| `PlainMessage`\<[`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md) \| `PlainMessage`\<[`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md) \| `PlainMessage`\<[`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_receipts.scailo_pb.ts:3058](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_receipts.scailo_pb.ts#L3058)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)

#### Defined in

[src/goods_receipts.scailo_pb.ts:3046](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_receipts.scailo_pb.ts#L3046)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)

#### Defined in

[src/goods_receipts.scailo_pb.ts:3050](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_receipts.scailo_pb.ts#L3050)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceSearchAllReq`](GoodsReceiptsServiceSearchAllReq.md)

#### Defined in

[src/goods_receipts.scailo_pb.ts:3054](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goods_receipts.scailo_pb.ts#L3054)
