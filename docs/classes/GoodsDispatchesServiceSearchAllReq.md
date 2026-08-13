[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchesServiceSearchAllReq

# Class: GoodsDispatchesServiceSearchAllReq

Broad-spectrum search and lookup request for locating and paginating goods dispatches via text matching.
This message encapsulates full-text query parameters, pagination controls, sorting keys,
lifecycle status constraints, and other core references.

**Note:** This is the primary message layout used for global search bars, fast-filtering dashboard
inputs, and omni-box search utilities where users need to match loose textual terms against
records while retaining structural pagination.

**`Generated`**

from message Scailo.GoodsDispatchesServiceSearchAllReq

## Hierarchy

- `Message`\<[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)\>

  ↳ **`GoodsDispatchesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchesServiceSearchAllReq.md#constructor)

### Properties

- [billingStatus](GoodsDispatchesServiceSearchAllReq.md#billingstatus)
- [buyerClientId](GoodsDispatchesServiceSearchAllReq.md#buyerclientid)
- [consigneeClientId](GoodsDispatchesServiceSearchAllReq.md#consigneeclientid)
- [count](GoodsDispatchesServiceSearchAllReq.md#count)
- [entityUuid](GoodsDispatchesServiceSearchAllReq.md#entityuuid)
- [isActive](GoodsDispatchesServiceSearchAllReq.md#isactive)
- [offset](GoodsDispatchesServiceSearchAllReq.md#offset)
- [refFrom](GoodsDispatchesServiceSearchAllReq.md#reffrom)
- [refId](GoodsDispatchesServiceSearchAllReq.md#refid)
- [searchKey](GoodsDispatchesServiceSearchAllReq.md#searchkey)
- [sortKey](GoodsDispatchesServiceSearchAllReq.md#sortkey)
- [sortOrder](GoodsDispatchesServiceSearchAllReq.md#sortorder)
- [status](GoodsDispatchesServiceSearchAllReq.md#status)
- [fields](GoodsDispatchesServiceSearchAllReq.md#fields)
- [runtime](GoodsDispatchesServiceSearchAllReq.md#runtime)
- [typeName](GoodsDispatchesServiceSearchAllReq.md#typename)

### Methods

- [clone](GoodsDispatchesServiceSearchAllReq.md#clone)
- [equals](GoodsDispatchesServiceSearchAllReq.md#equals)
- [fromBinary](GoodsDispatchesServiceSearchAllReq.md#frombinary)
- [fromJson](GoodsDispatchesServiceSearchAllReq.md#fromjson)
- [fromJsonString](GoodsDispatchesServiceSearchAllReq.md#fromjsonstring)
- [getType](GoodsDispatchesServiceSearchAllReq.md#gettype)
- [toBinary](GoodsDispatchesServiceSearchAllReq.md#tobinary)
- [toJSON](GoodsDispatchesServiceSearchAllReq.md#tojson)
- [toJson](GoodsDispatchesServiceSearchAllReq.md#tojson-1)
- [toJsonString](GoodsDispatchesServiceSearchAllReq.md#tojsonstring)
- [equals](GoodsDispatchesServiceSearchAllReq.md#equals-1)
- [fromBinary](GoodsDispatchesServiceSearchAllReq.md#frombinary-1)
- [fromJson](GoodsDispatchesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](GoodsDispatchesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchesServiceSearchAllReq**(`data?`): [`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)\> |

#### Returns

[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)

#### Overrides

Message\&lt;GoodsDispatchesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3709](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L3709)

## Properties

### billingStatus

• `Optional` **billingStatus**: [`GOODS_DISPATCH_BILLING_STATUS`](../enums/GOODS_DISPATCH_BILLING_STATUS.md)

**`Optional`**

**`Description`**

Filter goods dispatches based on their financial conversion lifecycle state—specifically, whether the physical shipment remains unbilled or has been successfully converted into a finalized Sales Invoice.

**`Example`**

```ts
GOODS_DISPATCH_BILLING_STATUS_UNBILLED
```

**`Regex`**

^[A-Z_]+$

**`Format`**

Valid GOODS_DISPATCH_BILLING_STATUS enum value.

**`Generated`**

from field: optional Scailo.GOODS_DISPATCH_BILLING_STATUS billing_status = 40;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3675](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L3675)

___

### buyerClientId

• `Optional` **buyerClientId**: `bigint`

**`Optional`**

**`Description`**

Filter goods dispatches by the unique internal identifier of the buyer client (the entity financially responsible) associated with the linked source document (e.g., Sales Order).

**`Example`**

```ts
1051
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 buyer_client_id = 51;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3707](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L3707)

___

### consigneeClientId

• `Optional` **consigneeClientId**: `bigint`

**`Optional`**

**`Description`**

Filter goods dispatches by the unique internal identifier of the consignee client associated with the linked source document (e.g., Sales Order).

**`Example`**

```ts
1050
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 consignee_client_id = 50;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3691](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L3691)

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

[src/goods_dispatches.scailo_pb.ts:3545](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L3545)

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

[src/goods_dispatches.scailo_pb.ts:3599](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L3599)

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

[src/goods_dispatches.scailo_pb.ts:3529](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L3529)

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

[src/goods_dispatches.scailo_pb.ts:3561](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L3561)

___

### refFrom

• `Optional` **refFrom**: [`GOODS_DISPATCH_REF_FROM`](../enums/GOODS_DISPATCH_REF_FROM.md)

**`Optional`**

**`Description`**

Filter goods dispatches based on the specific module or record type from which the logistical fulfillment originated (e.g., Sales Order).

**`Example`**

```ts
GOODS_DISPATCH_REF_FROM_SALES_ORDER
```

**`Regex`**

^[A-Z_]+$

**`Format`**

Valid GOODS_DISPATCH_REF_FROM enum value.

**`Generated`**

from field: optional Scailo.GOODS_DISPATCH_REF_FROM ref_from = 22;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3643](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L3643)

___

### refId

• `Optional` **refId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the specific referenced source document (e.g., the ID of the actual Sales Order being evaluated).

**`Example`**

```ts
1024
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 ref_id = 23;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3659](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L3659)

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

[src/goods_dispatches.scailo_pb.ts:3627](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L3627)

___

### sortKey

• `Optional` **sortKey**: [`GOODS_DISPATCH_SORT_KEY`](../enums/GOODS_DISPATCH_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.GOODS_DISPATCH_SORT_KEY sort_key = 5;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3583](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L3583)

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

[src/goods_dispatches.scailo_pb.ts:3573](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L3573)

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

[src/goods_dispatches.scailo_pb.ts:3611](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L3611)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3716](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L3716)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3714](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L3714)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsDispatchesServiceSearchAllReq"``

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3715](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L3715)

## Methods

### clone

▸ **clone**(): [`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md) \| `PlainMessage`\<[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md) \| `PlainMessage`\<[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md) \| `PlainMessage`\<[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3744](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L3744)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3732](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L3732)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3736](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L3736)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceSearchAllReq`](GoodsDispatchesServiceSearchAllReq.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3740](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L3740)
