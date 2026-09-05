[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoiceItemsSearchRequest

# Class: SalesInvoiceItemsSearchRequest

Request payload structure used to search and filter Sales Invoice Item records.
Supports pagination controls, tenancy isolation, status grouping, and text-based matching.

**`Generated`**

from message Scailo.SalesInvoiceItemsSearchRequest

## Hierarchy

- `Message`\<[`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md)\>

  ↳ **`SalesInvoiceItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](SalesInvoiceItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](SalesInvoiceItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](SalesInvoiceItemsSearchRequest.md#approvedonend)
- [approvedOnStart](SalesInvoiceItemsSearchRequest.md#approvedonstart)
- [approverRoleId](SalesInvoiceItemsSearchRequest.md#approverroleid)
- [buyerClientId](SalesInvoiceItemsSearchRequest.md#buyerclientid)
- [clientFamilyCode](SalesInvoiceItemsSearchRequest.md#clientfamilycode)
- [clientUomId](SalesInvoiceItemsSearchRequest.md#clientuomid)
- [count](SalesInvoiceItemsSearchRequest.md#count)
- [entityUuid](SalesInvoiceItemsSearchRequest.md#entityuuid)
- [familyId](SalesInvoiceItemsSearchRequest.md#familyid)
- [isActive](SalesInvoiceItemsSearchRequest.md#isactive)
- [offset](SalesInvoiceItemsSearchRequest.md#offset)
- [salesInvoiceId](SalesInvoiceItemsSearchRequest.md#salesinvoiceid)
- [salesOrderId](SalesInvoiceItemsSearchRequest.md#salesorderid)
- [searchKey](SalesInvoiceItemsSearchRequest.md#searchkey)
- [sortKey](SalesInvoiceItemsSearchRequest.md#sortkey)
- [sortOrder](SalesInvoiceItemsSearchRequest.md#sortorder)
- [status](SalesInvoiceItemsSearchRequest.md#status)
- [taxGroupId](SalesInvoiceItemsSearchRequest.md#taxgroupid)
- [fields](SalesInvoiceItemsSearchRequest.md#fields)
- [runtime](SalesInvoiceItemsSearchRequest.md#runtime)
- [typeName](SalesInvoiceItemsSearchRequest.md#typename)

### Methods

- [clone](SalesInvoiceItemsSearchRequest.md#clone)
- [equals](SalesInvoiceItemsSearchRequest.md#equals)
- [fromBinary](SalesInvoiceItemsSearchRequest.md#frombinary)
- [fromJson](SalesInvoiceItemsSearchRequest.md#fromjson)
- [fromJsonString](SalesInvoiceItemsSearchRequest.md#fromjsonstring)
- [getType](SalesInvoiceItemsSearchRequest.md#gettype)
- [toBinary](SalesInvoiceItemsSearchRequest.md#tobinary)
- [toJSON](SalesInvoiceItemsSearchRequest.md#tojson)
- [toJson](SalesInvoiceItemsSearchRequest.md#tojson-1)
- [toJsonString](SalesInvoiceItemsSearchRequest.md#tojsonstring)
- [equals](SalesInvoiceItemsSearchRequest.md#equals-1)
- [fromBinary](SalesInvoiceItemsSearchRequest.md#frombinary-1)
- [fromJson](SalesInvoiceItemsSearchRequest.md#fromjson-1)
- [fromJsonString](SalesInvoiceItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoiceItemsSearchRequest**(`data?`): [`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md)\> |

#### Returns

[`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md)

#### Overrides

Message\&lt;SalesInvoiceItemsSearchRequest\&gt;.constructor

#### Defined in

[src/sales_invoices.scailo_pb.ts:4535](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L4535)

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

[src/sales_invoices.scailo_pb.ts:4389](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L4389)

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

[src/sales_invoices.scailo_pb.ts:4373](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L4373)

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

[src/sales_invoices.scailo_pb.ts:4357](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L4357)

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

[src/sales_invoices.scailo_pb.ts:4405](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L4405)

___

### buyerClientId

• `Optional` **buyerClientId**: `bigint`

**`Optional`**

**`Description`**

Filter line items by the unique internal identifier of the buyer client (the entity financially responsible) associated with the linked source document (e.g., Sales Order).

**`Example`**

```ts
1051
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 buyer_client_id = 200;

#### Defined in

[src/sales_invoices.scailo_pb.ts:4517](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L4517)

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

from field: optional string client_family_code = 25;

#### Defined in

[src/sales_invoices.scailo_pb.ts:4469](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L4469)

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

from field: optional uint64 client_uom_id = 23;

#### Defined in

[src/sales_invoices.scailo_pb.ts:4453](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L4453)

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

[src/sales_invoices.scailo_pb.ts:4277](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L4277)

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

[src/sales_invoices.scailo_pb.ts:4331](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L4331)

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

from field: optional uint64 family_id = 21;

#### Defined in

[src/sales_invoices.scailo_pb.ts:4437](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L4437)

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

[src/sales_invoices.scailo_pb.ts:4261](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L4261)

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

[src/sales_invoices.scailo_pb.ts:4293](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L4293)

___

### salesInvoiceId

• `Optional` **salesInvoiceId**: `bigint`

**`Optional`**

**`Description`**

Filter line items belonging to a specific parent sales invoice.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 sales_invoice_id = 20;

#### Defined in

[src/sales_invoices.scailo_pb.ts:4421](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L4421)

___

### salesOrderId

• `Optional` **salesOrderId**: `bigint`

**`Optional`**

**`Description`**

Filter line items by the unique internal identifier of the sales order.

**`Example`**

```ts
1024
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 sales_order_id = 210;

#### Defined in

[src/sales_invoices.scailo_pb.ts:4533](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L4533)

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

[src/sales_invoices.scailo_pb.ts:4501](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L4501)

___

### sortKey

• `Optional` **sortKey**: [`SALES_INVOICE_ITEM_SORT_KEY`](../enums/SALES_INVOICE_ITEM_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.SALES_INVOICE_ITEM_SORT_KEY sort_key = 5;

#### Defined in

[src/sales_invoices.scailo_pb.ts:4315](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L4315)

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

[src/sales_invoices.scailo_pb.ts:4305](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L4305)

___

### status

• `Optional` **status**: [`SALES_INVOICE_ITEM_STATUS`](../enums/SALES_INVOICE_ITEM_STATUS.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.SALES_INVOICE_ITEM_STATUS status = 7;

#### Defined in

[src/sales_invoices.scailo_pb.ts:4341](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L4341)

___

### taxGroupId

• `Optional` **taxGroupId**: `bigint`

**`Optional`**

**`Description`**

Filter line items mapped to a specific tax group.

**`Example`**

```ts
4
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 tax_group_id = 27;

#### Defined in

[src/sales_invoices.scailo_pb.ts:4485](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L4485)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_invoices.scailo_pb.ts:4542](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L4542)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_invoices.scailo_pb.ts:4540](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L4540)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoiceItemsSearchRequest"``

#### Defined in

[src/sales_invoices.scailo_pb.ts:4541](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L4541)

## Methods

### clone

▸ **clone**(): [`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md) \| `PlainMessage`\<[`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md) \| `PlainMessage`\<[`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md) \| `PlainMessage`\<[`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_invoices.scailo_pb.ts:4576](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L4576)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:4564](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L4564)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:4568](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L4568)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoiceItemsSearchRequest`](SalesInvoiceItemsSearchRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:4572](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L4572)
