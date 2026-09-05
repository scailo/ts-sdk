[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrdersServiceCreateRequest

# Class: SalesOrdersServiceCreateRequest

Request message for defining and creating a new Sales Order within the system.
This record acts as the foundational transactional document for outbound sales,
encapsulating buyer and consignee relationships, billing and shipping parameters,
financial adjustments (such as discounts, round-offs, and advance payments),
and project associations.

**Note:** This payload is typically utilized by Sales Representatives or Order Management
systems to initiate the fulfillment lifecycle before it is approved and dispatched.

**`Generated`**

from message Scailo.SalesOrdersServiceCreateRequest

## Hierarchy

- `Message`\<[`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md)\>

  ↳ **`SalesOrdersServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](SalesOrdersServiceCreateRequest.md#constructor)

### Properties

- [buyerClientId](SalesOrdersServiceCreateRequest.md#buyerclientid)
- [consigneeClientId](SalesOrdersServiceCreateRequest.md#consigneeclientid)
- [currencyId](SalesOrdersServiceCreateRequest.md#currencyid)
- [entityUuid](SalesOrdersServiceCreateRequest.md#entityuuid)
- [formData](SalesOrdersServiceCreateRequest.md#formdata)
- [locationId](SalesOrdersServiceCreateRequest.md#locationid)
- [miscellaneousCost](SalesOrdersServiceCreateRequest.md#miscellaneouscost)
- [overallDiscount](SalesOrdersServiceCreateRequest.md#overalldiscount)
- [paymentAdvance](SalesOrdersServiceCreateRequest.md#paymentadvance)
- [paymentCycleInDays](SalesOrdersServiceCreateRequest.md#paymentcycleindays)
- [projectId](SalesOrdersServiceCreateRequest.md#projectid)
- [referenceId](SalesOrdersServiceCreateRequest.md#referenceid)
- [roundOff](SalesOrdersServiceCreateRequest.md#roundoff)
- [userComment](SalesOrdersServiceCreateRequest.md#usercomment)
- [vaultFolderId](SalesOrdersServiceCreateRequest.md#vaultfolderid)
- [fields](SalesOrdersServiceCreateRequest.md#fields)
- [runtime](SalesOrdersServiceCreateRequest.md#runtime)
- [typeName](SalesOrdersServiceCreateRequest.md#typename)

### Methods

- [clone](SalesOrdersServiceCreateRequest.md#clone)
- [equals](SalesOrdersServiceCreateRequest.md#equals)
- [fromBinary](SalesOrdersServiceCreateRequest.md#frombinary)
- [fromJson](SalesOrdersServiceCreateRequest.md#fromjson)
- [fromJsonString](SalesOrdersServiceCreateRequest.md#fromjsonstring)
- [getType](SalesOrdersServiceCreateRequest.md#gettype)
- [toBinary](SalesOrdersServiceCreateRequest.md#tobinary)
- [toJSON](SalesOrdersServiceCreateRequest.md#tojson)
- [toJson](SalesOrdersServiceCreateRequest.md#tojson-1)
- [toJsonString](SalesOrdersServiceCreateRequest.md#tojsonstring)
- [equals](SalesOrdersServiceCreateRequest.md#equals-1)
- [fromBinary](SalesOrdersServiceCreateRequest.md#frombinary-1)
- [fromJson](SalesOrdersServiceCreateRequest.md#fromjson-1)
- [fromJsonString](SalesOrdersServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrdersServiceCreateRequest**(`data?`): [`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md)\> |

#### Returns

[`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md)

#### Overrides

Message\&lt;SalesOrdersServiceCreateRequest\&gt;.constructor

#### Defined in

[src/sales_orders.scailo_pb.ts:646](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L646)

## Properties

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the buyer client (the entity financially responsible for the order).

**`Example`**

```ts
1051
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 buyer_client_id = 13;

#### Defined in

[src/sales_orders.scailo_pb.ts:502](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L502)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the consignee client (the entity physically receiving the goods or services).

**`Example`**

```ts
1050
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 consignee_client_id = 12;

#### Defined in

[src/sales_orders.scailo_pb.ts:486](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L486)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the currency used for all financial calculations, billing, and pricing within this order.

**`Example`**

```ts
3
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 currency_id = 15;

#### Defined in

[src/sales_orders.scailo_pb.ts:534](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L534)

___

### entityUuid

• `Optional` **entityUuid**: `string`

**`Optional`**

**`Description`**

The globally unique identifier for the Organization or Business Entity.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: optional string entity_uuid = 1;

#### Defined in

[src/sales_orders.scailo_pb.ts:422](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L422)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

**`Optional`**

**`Description`**

A collection of dynamic form fields for organization-specific data.

**`Example`**

```ts
[]
```

**`Format`**

An array/list of FormFieldDatumCreateRequest entries. Can be left empty if no custom attributes are needed.

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/sales_orders.scailo_pb.ts:644](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L644)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the originating location (e.g., specific warehouse, plant, or office) responsible for fulfilling this order.

**`Example`**

```ts
42
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 location_id = 14;

#### Defined in

[src/sales_orders.scailo_pb.ts:518](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L518)

___

### miscellaneousCost

• `Optional` **miscellaneousCost**: `bigint`

**`Optional`**

**`Description`**

Any additional miscellaneous costs (e.g., handling fees, freight charges) applied to the order, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
1500
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 miscellaneous_cost = 17;

#### Defined in

[src/sales_orders.scailo_pb.ts:566](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L566)

___

### overallDiscount

• `Optional` **overallDiscount**: `bigint`

**`Optional`**

**`Description`**

A flat discount amount applied across the entire order total, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
500
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 overall_discount = 18;

#### Defined in

[src/sales_orders.scailo_pb.ts:582](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L582)

___

### paymentAdvance

• `Optional` **paymentAdvance**: `bigint`

**`Optional`**

**`Description`**

The monetary amount paid in advance by the buyer prior to fulfillment, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
10000
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 payment_advance = 20;

#### Defined in

[src/sales_orders.scailo_pb.ts:614](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L614)

___

### paymentCycleInDays

• `Optional` **paymentCycleInDays**: `bigint`

**`Optional`**

**`Description`**

The agreed-upon payment term or credit cycle duration, measured in days from the invoice date.

**`Example`**

```ts
30
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 payment_cycle_in_days = 21;

#### Defined in

[src/sales_orders.scailo_pb.ts:630](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L630)

___

### projectId

• `Optional` **projectId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of an associated project, used to track sales revenue and fulfillment against specific long-term initiatives.

**`Example`**

```ts
88
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 project_id = 16;

#### Defined in

[src/sales_orders.scailo_pb.ts:550](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L550)

___

### referenceId

• **referenceId**: `string` = `""`

**`Mandatory`**

**`Description`**

A unique external reference ID for the record. Must be alphanumeric (spaces allowed). Used for cross-referencing with external systems.

**`Example`**

```ts
"ABS-2023-001"
```

**`Regex`**

"[0-9A-Za-z ]+$"

**`Format`**

Alphanumeric characters and spaces only. No special symbols or punctuation allowed.

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/sales_orders.scailo_pb.ts:470](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L470)

___

### roundOff

• `Optional` **roundOff**: `bigint`

**`Optional`**

**`Description`**

The applicable rounding adjustment amount to align the final invoice total. Can be positive or negative, represented in the base currency subunit.

**`Example`**

```ts
-15
```

**`Regex`**

^-?[0-9]+$

**`Format`**

Signed 64-bit integer.

**`Generated`**

from field: optional int64 round_off = 19;

#### Defined in

[src/sales_orders.scailo_pb.ts:598](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L598)

___

### userComment

• `Optional` **userComment**: `string`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string user_comment = 2;

#### Defined in

[src/sales_orders.scailo_pb.ts:438](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L438)

___

### vaultFolderId

• `Optional` **vaultFolderId**: `bigint`

**`Optional`**

**`Description`**

The ID of the associated vault folder for storing documents. Defaults to 0 if no specific folder is assigned.

**`Example`**

```ts
15234
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 vault_folder_id = 9;

#### Defined in

[src/sales_orders.scailo_pb.ts:454](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L454)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_orders.scailo_pb.ts:653](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L653)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_orders.scailo_pb.ts:651](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L651)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrdersServiceCreateRequest"``

#### Defined in

[src/sales_orders.scailo_pb.ts:652](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L652)

## Methods

### clone

▸ **clone**(): [`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_orders.scailo_pb.ts:683](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L683)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:671](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L671)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:675](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L675)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceCreateRequest`](SalesOrdersServiceCreateRequest.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:679](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_orders.scailo_pb.ts#L679)
