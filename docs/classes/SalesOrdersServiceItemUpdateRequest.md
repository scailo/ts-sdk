[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrdersServiceItemUpdateRequest

# Class: SalesOrdersServiceItemUpdateRequest

Request message for modifying the core transactional parameters of an existing Sales Order line item.
Supports updating quantities, commercial terms, delivery dates, and specifications,
typically utilized during order negotiation or amendment phases.

**`Generated`**

from message Scailo.SalesOrdersServiceItemUpdateRequest

## Hierarchy

- `Message`\<[`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md)\>

  ↳ **`SalesOrdersServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SalesOrdersServiceItemUpdateRequest.md#constructor)

### Properties

- [clientFamilyCode](SalesOrdersServiceItemUpdateRequest.md#clientfamilycode)
- [clientQuantity](SalesOrdersServiceItemUpdateRequest.md#clientquantity)
- [clientUomId](SalesOrdersServiceItemUpdateRequest.md#clientuomid)
- [deliveryDate](SalesOrdersServiceItemUpdateRequest.md#deliverydate)
- [discount](SalesOrdersServiceItemUpdateRequest.md#discount)
- [id](SalesOrdersServiceItemUpdateRequest.md#id)
- [internalQuantity](SalesOrdersServiceItemUpdateRequest.md#internalquantity)
- [isInvoiceable](SalesOrdersServiceItemUpdateRequest.md#isinvoiceable)
- [specifications](SalesOrdersServiceItemUpdateRequest.md#specifications)
- [taxGroupId](SalesOrdersServiceItemUpdateRequest.md#taxgroupid)
- [unitPrice](SalesOrdersServiceItemUpdateRequest.md#unitprice)
- [userComment](SalesOrdersServiceItemUpdateRequest.md#usercomment)
- [fields](SalesOrdersServiceItemUpdateRequest.md#fields)
- [runtime](SalesOrdersServiceItemUpdateRequest.md#runtime)
- [typeName](SalesOrdersServiceItemUpdateRequest.md#typename)

### Methods

- [clone](SalesOrdersServiceItemUpdateRequest.md#clone)
- [equals](SalesOrdersServiceItemUpdateRequest.md#equals)
- [fromBinary](SalesOrdersServiceItemUpdateRequest.md#frombinary)
- [fromJson](SalesOrdersServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](SalesOrdersServiceItemUpdateRequest.md#fromjsonstring)
- [getType](SalesOrdersServiceItemUpdateRequest.md#gettype)
- [toBinary](SalesOrdersServiceItemUpdateRequest.md#tobinary)
- [toJSON](SalesOrdersServiceItemUpdateRequest.md#tojson)
- [toJson](SalesOrdersServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](SalesOrdersServiceItemUpdateRequest.md#tojsonstring)
- [equals](SalesOrdersServiceItemUpdateRequest.md#equals-1)
- [fromBinary](SalesOrdersServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](SalesOrdersServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](SalesOrdersServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrdersServiceItemUpdateRequest**(`data?`): [`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md)\> |

#### Returns

[`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md)

#### Overrides

Message\&lt;SalesOrdersServiceItemUpdateRequest\&gt;.constructor

#### Defined in

[src/sales_orders.scailo_pb.ts:2196](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2196)

## Properties

### clientFamilyCode

• `Optional` **clientFamilyCode**: `string`

**`Optional`**

**`Description`**

The updated client's specific alphanumeric part number, SKU, or family code.

**`Example`**

```ts
"CLI-SKU-992"
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string client_family_code = 16;

#### Defined in

[src/sales_orders.scailo_pb.ts:2098](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2098)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The updated ordered quantity represented in the client's specific unit of measure. Stored in subunits (cents).

**`Example`**

```ts
5000
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 client_quantity = 15;

#### Defined in

[src/sales_orders.scailo_pb.ts:2082](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2082)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The updated unique internal identifier of the Unit of Measure (UOM) requested by the client.

**`Example`**

```ts
12
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 client_uom_id = 14;

#### Defined in

[src/sales_orders.scailo_pb.ts:2066](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2066)

___

### deliveryDate

• **deliveryDate**: `string` = `""`

**`Mandatory`**

**`Description`**

The updated specific target delivery date for this line item.

**`Example`**

```ts
"2023-11-15"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string delivery_date = 20;

#### Defined in

[src/sales_orders.scailo_pb.ts:2162](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2162)

___

### discount

• **discount**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The updated discount percentage applied to this specific item, represented in subunits (e.g., 1500 for 15.00%).

**`Example`**

```ts
1500
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 discount = 19;

#### Defined in

[src/sales_orders.scailo_pb.ts:2146](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2146)

___

### id

• **id**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the target record that needs to be updated.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/sales_orders.scailo_pb.ts:2034](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2034)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The updated ordered quantity represented in the system's internal base unit of measure. Stored in subunits (cents).

**`Example`**

```ts
10000
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

[src/sales_orders.scailo_pb.ts:2050](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2050)

___

### isInvoiceable

• `Optional` **isInvoiceable**: `boolean`

**`Optional`**

**`Description`**

A boolean flag indicating whether this specific line item is eligible to be processed for invoicing.

**`Example`**

```ts
true
```

**`Regex`**

^(?:true|false)$

**`Format`**

Boolean true or false.

**`Generated`**

from field: optional bool is_invoiceable = 22;

#### Defined in

[src/sales_orders.scailo_pb.ts:2194](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2194)

___

### specifications

• `Optional` **specifications**: `string`

**`Optional`**

**`Description`**

Updated custom textual requirements, manufacturing notes, or specifications for fulfilling this item.

**`Example`**

```ts
"Requires double-reinforced packaging for international transit."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string specifications = 21;

#### Defined in

[src/sales_orders.scailo_pb.ts:2178](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2178)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The updated unique internal identifier of the tax group or tax bracket applicable to this item.

**`Example`**

```ts
4
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 tax_group_id = 18;

#### Defined in

[src/sales_orders.scailo_pb.ts:2130](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2130)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The updated price per unit for this item, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
2500
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 unit_price = 17;

#### Defined in

[src/sales_orders.scailo_pb.ts:2114](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2114)

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

from field: optional string user_comment = 1;

#### Defined in

[src/sales_orders.scailo_pb.ts:2018](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2018)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_orders.scailo_pb.ts:2203](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2203)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_orders.scailo_pb.ts:2201](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2201)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrdersServiceItemUpdateRequest"``

#### Defined in

[src/sales_orders.scailo_pb.ts:2202](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2202)

## Methods

### clone

▸ **clone**(): [`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_orders.scailo_pb.ts:2230](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2230)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:2218](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2218)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:2222](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2222)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceItemUpdateRequest`](SalesOrdersServiceItemUpdateRequest.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:2226](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2226)
