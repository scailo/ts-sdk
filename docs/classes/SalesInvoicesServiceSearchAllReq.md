[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoicesServiceSearchAllReq

# Class: SalesInvoicesServiceSearchAllReq

Broad-spectrum search and lookup request for locating and paginating sales invoices via text matching.
This message encapsulates full-text query parameters, pagination controls, sorting keys,
lifecycle status constraints, and other core references.

**Note:** This is the primary message layout used for global search bars, fast-filtering dashboard
inputs, and omni-box search utilities where users need to match loose textual terms against
records while retaining structural pagination.

**`Generated`**

from message Scailo.SalesInvoicesServiceSearchAllReq

## Hierarchy

- `Message`\<[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)\>

  ↳ **`SalesInvoicesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](SalesInvoicesServiceSearchAllReq.md#constructor)

### Properties

- [buyerClientId](SalesInvoicesServiceSearchAllReq.md#buyerclientid)
- [consigneeClientId](SalesInvoicesServiceSearchAllReq.md#consigneeclientid)
- [count](SalesInvoicesServiceSearchAllReq.md#count)
- [entityUuid](SalesInvoicesServiceSearchAllReq.md#entityuuid)
- [isActive](SalesInvoicesServiceSearchAllReq.md#isactive)
- [offset](SalesInvoicesServiceSearchAllReq.md#offset)
- [refFrom](SalesInvoicesServiceSearchAllReq.md#reffrom)
- [refId](SalesInvoicesServiceSearchAllReq.md#refid)
- [searchKey](SalesInvoicesServiceSearchAllReq.md#searchkey)
- [sortKey](SalesInvoicesServiceSearchAllReq.md#sortkey)
- [sortOrder](SalesInvoicesServiceSearchAllReq.md#sortorder)
- [status](SalesInvoicesServiceSearchAllReq.md#status)
- [fields](SalesInvoicesServiceSearchAllReq.md#fields)
- [runtime](SalesInvoicesServiceSearchAllReq.md#runtime)
- [typeName](SalesInvoicesServiceSearchAllReq.md#typename)

### Methods

- [clone](SalesInvoicesServiceSearchAllReq.md#clone)
- [equals](SalesInvoicesServiceSearchAllReq.md#equals)
- [fromBinary](SalesInvoicesServiceSearchAllReq.md#frombinary)
- [fromJson](SalesInvoicesServiceSearchAllReq.md#fromjson)
- [fromJsonString](SalesInvoicesServiceSearchAllReq.md#fromjsonstring)
- [getType](SalesInvoicesServiceSearchAllReq.md#gettype)
- [toBinary](SalesInvoicesServiceSearchAllReq.md#tobinary)
- [toJSON](SalesInvoicesServiceSearchAllReq.md#tojson)
- [toJson](SalesInvoicesServiceSearchAllReq.md#tojson-1)
- [toJsonString](SalesInvoicesServiceSearchAllReq.md#tojsonstring)
- [equals](SalesInvoicesServiceSearchAllReq.md#equals-1)
- [fromBinary](SalesInvoicesServiceSearchAllReq.md#frombinary-1)
- [fromJson](SalesInvoicesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](SalesInvoicesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoicesServiceSearchAllReq**(`data?`): [`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)\> |

#### Returns

[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)

#### Overrides

Message\&lt;SalesInvoicesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/sales_invoices.scailo_pb.ts:3955](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L3955)

## Properties

### buyerClientId

• `Optional` **buyerClientId**: `bigint`

**`Optional`**

**`Description`**

Filter sales invoices by the unique internal identifier of the buyer client (the entity financially responsible) associated with the linked source document (e.g., Sales Order).

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

[src/sales_invoices.scailo_pb.ts:3953](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L3953)

___

### consigneeClientId

• `Optional` **consigneeClientId**: `bigint`

**`Optional`**

**`Description`**

Filter sales invoices by the unique internal identifier of the consignee client associated with the linked source document (e.g., Sales Order).

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

[src/sales_invoices.scailo_pb.ts:3937](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L3937)

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

[src/sales_invoices.scailo_pb.ts:3807](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L3807)

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

[src/sales_invoices.scailo_pb.ts:3861](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L3861)

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

[src/sales_invoices.scailo_pb.ts:3791](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L3791)

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

[src/sales_invoices.scailo_pb.ts:3823](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L3823)

___

### refFrom

• `Optional` **refFrom**: [`SALES_INVOICE_REF_FROM`](../enums/SALES_INVOICE_REF_FROM.md)

**`Optional`**

**`Description`**

The specific module or record type from which this invoice originates (e.g., Sales Order).

**`Example`**

```ts
"SALES_INVOICE_REF_FROM_SALES_ORDER"
```

**`Regex`**

^[A-Z_]+$

**`Format`**

Valid SALES_INVOICE_REF_FROM enum value. Cannot be unspecified (0).

**`Generated`**

from field: optional Scailo.SALES_INVOICE_REF_FROM ref_from = 22;

#### Defined in

[src/sales_invoices.scailo_pb.ts:3905](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L3905)

___

### refId

• `Optional` **refId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the specific referenced source document (e.g., the ID of the actual Sales Order being billed).

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

[src/sales_invoices.scailo_pb.ts:3921](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L3921)

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

[src/sales_invoices.scailo_pb.ts:3889](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L3889)

___

### sortKey

• `Optional` **sortKey**: [`SALES_INVOICE_SORT_KEY`](../enums/SALES_INVOICE_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.SALES_INVOICE_SORT_KEY sort_key = 5;

#### Defined in

[src/sales_invoices.scailo_pb.ts:3845](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L3845)

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

[src/sales_invoices.scailo_pb.ts:3835](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L3835)

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

[src/sales_invoices.scailo_pb.ts:3873](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L3873)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_invoices.scailo_pb.ts:3962](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L3962)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_invoices.scailo_pb.ts:3960](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L3960)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoicesServiceSearchAllReq"``

#### Defined in

[src/sales_invoices.scailo_pb.ts:3961](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L3961)

## Methods

### clone

▸ **clone**(): [`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md) \| `PlainMessage`\<[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md) \| `PlainMessage`\<[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md) \| `PlainMessage`\<[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_invoices.scailo_pb.ts:3989](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L3989)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:3977](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L3977)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:3981](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L3981)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:3985](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L3985)
