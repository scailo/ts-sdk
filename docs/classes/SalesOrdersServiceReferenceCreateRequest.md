[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrdersServiceReferenceCreateRequest

# Class: SalesOrdersServiceReferenceCreateRequest

Request message for creating and linking an external or internal document reference to a Sales Order.
These references (e.g., tying a Sales Quotation to a Sales Order) serve as the operational constraints
that drive downstream automation, such as Autofill operations that pull line items directly from the referenced document.

**`Generated`**

from message Scailo.SalesOrdersServiceReferenceCreateRequest

## Hierarchy

- `Message`\<[`SalesOrdersServiceReferenceCreateRequest`](SalesOrdersServiceReferenceCreateRequest.md)\>

  ↳ **`SalesOrdersServiceReferenceCreateRequest`**

## Table of contents

### Constructors

- [constructor](SalesOrdersServiceReferenceCreateRequest.md#constructor)

### Properties

- [context](SalesOrdersServiceReferenceCreateRequest.md#context)
- [refFrom](SalesOrdersServiceReferenceCreateRequest.md#reffrom)
- [refId](SalesOrdersServiceReferenceCreateRequest.md#refid)
- [salesOrderId](SalesOrdersServiceReferenceCreateRequest.md#salesorderid)
- [userComment](SalesOrdersServiceReferenceCreateRequest.md#usercomment)
- [fields](SalesOrdersServiceReferenceCreateRequest.md#fields)
- [runtime](SalesOrdersServiceReferenceCreateRequest.md#runtime)
- [typeName](SalesOrdersServiceReferenceCreateRequest.md#typename)

### Methods

- [clone](SalesOrdersServiceReferenceCreateRequest.md#clone)
- [equals](SalesOrdersServiceReferenceCreateRequest.md#equals)
- [fromBinary](SalesOrdersServiceReferenceCreateRequest.md#frombinary)
- [fromJson](SalesOrdersServiceReferenceCreateRequest.md#fromjson)
- [fromJsonString](SalesOrdersServiceReferenceCreateRequest.md#fromjsonstring)
- [getType](SalesOrdersServiceReferenceCreateRequest.md#gettype)
- [toBinary](SalesOrdersServiceReferenceCreateRequest.md#tobinary)
- [toJSON](SalesOrdersServiceReferenceCreateRequest.md#tojson)
- [toJson](SalesOrdersServiceReferenceCreateRequest.md#tojson-1)
- [toJsonString](SalesOrdersServiceReferenceCreateRequest.md#tojsonstring)
- [equals](SalesOrdersServiceReferenceCreateRequest.md#equals-1)
- [fromBinary](SalesOrdersServiceReferenceCreateRequest.md#frombinary-1)
- [fromJson](SalesOrdersServiceReferenceCreateRequest.md#fromjson-1)
- [fromJsonString](SalesOrdersServiceReferenceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrdersServiceReferenceCreateRequest**(`data?`): [`SalesOrdersServiceReferenceCreateRequest`](SalesOrdersServiceReferenceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrdersServiceReferenceCreateRequest`](SalesOrdersServiceReferenceCreateRequest.md)\> |

#### Returns

[`SalesOrdersServiceReferenceCreateRequest`](SalesOrdersServiceReferenceCreateRequest.md)

#### Overrides

Message\&lt;SalesOrdersServiceReferenceCreateRequest\&gt;.constructor

#### Defined in

[src/sales_orders.scailo_pb.ts:4534](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L4534)

## Properties

### context

• **context**: [`SALES_ORDER_REFERENCE_CONTEXT`](../enums/SALES_ORDER_REFERENCE_CONTEXT.md) = `SALES_ORDER_REFERENCE_CONTEXT.SALES_ORDER_REFERENCE_CONTEXT_ANY_UNSPECIFIED`

**`Mandatory`**

**`Description`**

The operational context in which this reference is being applied (e.g., Billing).

**`Example`**

```ts
"SALES_ORDER_REFERENCE_CONTEXT_BILLING"
```

**`Regex`**

^[A-Z_]+$

**`Format`**

Valid SALES_ORDER_REFERENCE_CONTEXT enum value. Cannot be unspecified (0).

**`Generated`**

from field: Scailo.SALES_ORDER_REFERENCE_CONTEXT context = 11;

#### Defined in

[src/sales_orders.scailo_pb.ts:4500](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L4500)

___

### refFrom

• **refFrom**: [`SALES_ORDER_REFERENCE_REF_FROM`](../enums/SALES_ORDER_REFERENCE_REF_FROM.md) = `SALES_ORDER_REFERENCE_REF_FROM.SALES_ORDER_REFERENCE_REF_FROM_ANY_UNSPECIFIED`

**`Mandatory`**

**`Description`**

The specific module or record type from which this reference originates.

**`Example`**

```ts
"SALES_ORDER_REFERENCE_REF_FROM_SALES_QUOTATION"
```

**`Regex`**

^[A-Z_]+$

**`Format`**

Valid SALES_ORDER_REFERENCE_REF_FROM enum value. Cannot be unspecified (0).

**`Generated`**

from field: Scailo.SALES_ORDER_REFERENCE_REF_FROM ref_from = 12;

#### Defined in

[src/sales_orders.scailo_pb.ts:4516](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L4516)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the specific referenced document (e.g., the ID of the actual Sales Quotation).

**`Example`**

```ts
450
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

[src/sales_orders.scailo_pb.ts:4532](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L4532)

___

### salesOrderId

• **salesOrderId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the parent sales order to which this reference is being attached.

**`Example`**

```ts
1024
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 sales_order_id = 10;

#### Defined in

[src/sales_orders.scailo_pb.ts:4484](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L4484)

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

[src/sales_orders.scailo_pb.ts:4468](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L4468)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_orders.scailo_pb.ts:4541](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L4541)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_orders.scailo_pb.ts:4539](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L4539)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrdersServiceReferenceCreateRequest"``

#### Defined in

[src/sales_orders.scailo_pb.ts:4540](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L4540)

## Methods

### clone

▸ **clone**(): [`SalesOrdersServiceReferenceCreateRequest`](SalesOrdersServiceReferenceCreateRequest.md)

Create a deep copy.

#### Returns

[`SalesOrdersServiceReferenceCreateRequest`](SalesOrdersServiceReferenceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrdersServiceReferenceCreateRequest`](SalesOrdersServiceReferenceCreateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceReferenceCreateRequest`](SalesOrdersServiceReferenceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrdersServiceReferenceCreateRequest`](SalesOrdersServiceReferenceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrdersServiceReferenceCreateRequest`](SalesOrdersServiceReferenceCreateRequest.md)\>

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
| `a` | `undefined` \| [`SalesOrdersServiceReferenceCreateRequest`](SalesOrdersServiceReferenceCreateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceReferenceCreateRequest`](SalesOrdersServiceReferenceCreateRequest.md)\> |
| `b` | `undefined` \| [`SalesOrdersServiceReferenceCreateRequest`](SalesOrdersServiceReferenceCreateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceReferenceCreateRequest`](SalesOrdersServiceReferenceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_orders.scailo_pb.ts:4561](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L4561)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrdersServiceReferenceCreateRequest`](SalesOrdersServiceReferenceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrdersServiceReferenceCreateRequest`](SalesOrdersServiceReferenceCreateRequest.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:4549](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L4549)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrdersServiceReferenceCreateRequest`](SalesOrdersServiceReferenceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceReferenceCreateRequest`](SalesOrdersServiceReferenceCreateRequest.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:4553](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L4553)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrdersServiceReferenceCreateRequest`](SalesOrdersServiceReferenceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceReferenceCreateRequest`](SalesOrdersServiceReferenceCreateRequest.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:4557](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L4557)
