[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrderInventoryMatch

# Class: SalesOrderInventoryMatch

Represents a highly granular reconciliation record mapping lifecycle quantities aggregated at the family level.
This payload acts as the primary diagnostic tool for identifying operational discrepancies by tracking
the exact flow of a specific item from order creation through dispatch, invoicing, returns, and credits.

**Critical Context:** The values within this message are cumulative. If a single ordered family is fulfilled
via multiple staggered shipments, invoices, or returns, this record aggregates those downstream transactions
into a single unified total, evaluating the quantities in both the internal primary unit and the client's
requested unit of measure (secondary unit).

**`Generated`**

from message Scailo.SalesOrderInventoryMatch

## Hierarchy

- `Message`\<[`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)\>

  ↳ **`SalesOrderInventoryMatch`**

## Table of contents

### Constructors

- [constructor](SalesOrderInventoryMatch.md#constructor)

### Properties

- [clientUomId](SalesOrderInventoryMatch.md#clientuomid)
- [creditedPrimary](SalesOrderInventoryMatch.md#creditedprimary)
- [creditedSecondary](SalesOrderInventoryMatch.md#creditedsecondary)
- [dispatchedPrimary](SalesOrderInventoryMatch.md#dispatchedprimary)
- [dispatchedSecondary](SalesOrderInventoryMatch.md#dispatchedsecondary)
- [familyId](SalesOrderInventoryMatch.md#familyid)
- [invoicedPrimary](SalesOrderInventoryMatch.md#invoicedprimary)
- [invoicedSecondary](SalesOrderInventoryMatch.md#invoicedsecondary)
- [orderedPrimary](SalesOrderInventoryMatch.md#orderedprimary)
- [orderedSecondary](SalesOrderInventoryMatch.md#orderedsecondary)
- [returnedPrimary](SalesOrderInventoryMatch.md#returnedprimary)
- [returnedSecondary](SalesOrderInventoryMatch.md#returnedsecondary)
- [fields](SalesOrderInventoryMatch.md#fields)
- [runtime](SalesOrderInventoryMatch.md#runtime)
- [typeName](SalesOrderInventoryMatch.md#typename)

### Methods

- [clone](SalesOrderInventoryMatch.md#clone)
- [equals](SalesOrderInventoryMatch.md#equals)
- [fromBinary](SalesOrderInventoryMatch.md#frombinary)
- [fromJson](SalesOrderInventoryMatch.md#fromjson)
- [fromJsonString](SalesOrderInventoryMatch.md#fromjsonstring)
- [getType](SalesOrderInventoryMatch.md#gettype)
- [toBinary](SalesOrderInventoryMatch.md#tobinary)
- [toJSON](SalesOrderInventoryMatch.md#tojson)
- [toJson](SalesOrderInventoryMatch.md#tojson-1)
- [toJsonString](SalesOrderInventoryMatch.md#tojsonstring)
- [equals](SalesOrderInventoryMatch.md#equals-1)
- [fromBinary](SalesOrderInventoryMatch.md#frombinary-1)
- [fromJson](SalesOrderInventoryMatch.md#fromjson-1)
- [fromJsonString](SalesOrderInventoryMatch.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrderInventoryMatch**(`data?`): [`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)\> |

#### Returns

[`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)

#### Overrides

Message\&lt;SalesOrderInventoryMatch\&gt;.constructor

#### Defined in

[src/sales_orders.scailo_pb.ts:5831](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5831)

## Properties

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the specific Unit of Measure (UOM) requested by the client (which acts as the secondary tracking unit).

**`Example`**

```ts
12
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 client_uom_id = 2;

#### Defined in

[src/sales_orders.scailo_pb.ts:5669](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5669)

___

### creditedPrimary

• **creditedPrimary**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The cumulative credited (refunded) quantity aggregated across all credit notes for this family, evaluated in the system's internal primary unit of measure.

**`Example`**

```ts
500
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 credited_primary = 14;

#### Defined in

[src/sales_orders.scailo_pb.ts:5813](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5813)

___

### creditedSecondary

• **creditedSecondary**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The cumulative credited (refunded) quantity aggregated across all credit notes for this family, evaluated in the client's requested unit of measure (secondary unit).

**`Example`**

```ts
50
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 credited_secondary = 24;

#### Defined in

[src/sales_orders.scailo_pb.ts:5829](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5829)

___

### dispatchedPrimary

• **dispatchedPrimary**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The cumulative dispatched (shipped) quantity aggregated across all fulfillment operations for this family, evaluated in the system's internal primary unit of measure.

**`Example`**

```ts
4500
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 dispatched_primary = 11;

#### Defined in

[src/sales_orders.scailo_pb.ts:5717](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5717)

___

### dispatchedSecondary

• **dispatchedSecondary**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The cumulative dispatched (shipped) quantity aggregated across all fulfillment operations for this family, evaluated in the client's requested unit of measure (secondary unit).

**`Example`**

```ts
450
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 dispatched_secondary = 21;

#### Defined in

[src/sales_orders.scailo_pb.ts:5733](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5733)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the family serving as the aggregation grouping key.

**`Example`**

```ts
505
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 family_id = 1;

#### Defined in

[src/sales_orders.scailo_pb.ts:5653](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5653)

___

### invoicedPrimary

• **invoicedPrimary**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The cumulative invoiced (billed) quantity aggregated across all generated invoices for this family, evaluated in the system's internal primary unit of measure.

**`Example`**

```ts
4500
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 invoiced_primary = 12;

#### Defined in

[src/sales_orders.scailo_pb.ts:5749](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5749)

___

### invoicedSecondary

• **invoicedSecondary**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The cumulative invoiced (billed) quantity aggregated across all generated invoices for this family, evaluated in the client's requested unit of measure (secondary unit).

**`Example`**

```ts
450
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 invoiced_secondary = 22;

#### Defined in

[src/sales_orders.scailo_pb.ts:5765](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5765)

___

### orderedPrimary

• **orderedPrimary**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The cumulative ordered quantity for this family, evaluated in the system's internal primary unit of measure (in subunits).

**`Example`**

```ts
5000
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 ordered_primary = 10;

#### Defined in

[src/sales_orders.scailo_pb.ts:5685](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5685)

___

### orderedSecondary

• **orderedSecondary**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The cumulative ordered quantity for this family, evaluated in the client's specifically requested unit of measure (secondary unit). Stored in subunits.

**`Example`**

```ts
500
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 ordered_secondary = 20;

#### Defined in

[src/sales_orders.scailo_pb.ts:5701](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5701)

___

### returnedPrimary

• **returnedPrimary**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The cumulative returned (received back) quantity aggregated across all return operations for this family, evaluated in the system's internal primary unit of measure.

**`Example`**

```ts
500
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 returned_primary = 13;

#### Defined in

[src/sales_orders.scailo_pb.ts:5781](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5781)

___

### returnedSecondary

• **returnedSecondary**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The cumulative returned (received back) quantity aggregated across all return operations for this family, evaluated in the client's requested unit of measure (secondary unit).

**`Example`**

```ts
50
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 returned_secondary = 23;

#### Defined in

[src/sales_orders.scailo_pb.ts:5797](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5797)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_orders.scailo_pb.ts:5838](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5838)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_orders.scailo_pb.ts:5836](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5836)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrderInventoryMatch"``

#### Defined in

[src/sales_orders.scailo_pb.ts:5837](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5837)

## Methods

### clone

▸ **clone**(): [`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)

Create a deep copy.

#### Returns

[`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md) \| `PlainMessage`\<[`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)\>

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
| `a` | `undefined` \| [`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md) \| `PlainMessage`\<[`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)\> |
| `b` | `undefined` \| [`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md) \| `PlainMessage`\<[`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_orders.scailo_pb.ts:5865](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5865)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:5853](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5853)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:5857](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5857)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrderInventoryMatch`](SalesOrderInventoryMatch.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:5861](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L5861)
