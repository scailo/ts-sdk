[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrdersServiceItemTermsUpdateRequest

# Class: SalesOrdersServiceItemTermsUpdateRequest

Request message for executing targeted updates strictly focused on the commercial terms
of an existing Sales Order line item.
Enables adjustment of pricing, taxes, discounts, delivery dates, and specifications
without modifying quantities or underlying unit structures.

**`Generated`**

from message Scailo.SalesOrdersServiceItemTermsUpdateRequest

## Hierarchy

- `Message`\<[`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md)\>

  ↳ **`SalesOrdersServiceItemTermsUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SalesOrdersServiceItemTermsUpdateRequest.md#constructor)

### Properties

- [deliveryDate](SalesOrdersServiceItemTermsUpdateRequest.md#deliverydate)
- [discount](SalesOrdersServiceItemTermsUpdateRequest.md#discount)
- [specifications](SalesOrdersServiceItemTermsUpdateRequest.md#specifications)
- [taxGroupId](SalesOrdersServiceItemTermsUpdateRequest.md#taxgroupid)
- [unitPrice](SalesOrdersServiceItemTermsUpdateRequest.md#unitprice)
- [userComment](SalesOrdersServiceItemTermsUpdateRequest.md#usercomment)
- [uuid](SalesOrdersServiceItemTermsUpdateRequest.md#uuid)
- [fields](SalesOrdersServiceItemTermsUpdateRequest.md#fields)
- [runtime](SalesOrdersServiceItemTermsUpdateRequest.md#runtime)
- [typeName](SalesOrdersServiceItemTermsUpdateRequest.md#typename)

### Methods

- [clone](SalesOrdersServiceItemTermsUpdateRequest.md#clone)
- [equals](SalesOrdersServiceItemTermsUpdateRequest.md#equals)
- [fromBinary](SalesOrdersServiceItemTermsUpdateRequest.md#frombinary)
- [fromJson](SalesOrdersServiceItemTermsUpdateRequest.md#fromjson)
- [fromJsonString](SalesOrdersServiceItemTermsUpdateRequest.md#fromjsonstring)
- [getType](SalesOrdersServiceItemTermsUpdateRequest.md#gettype)
- [toBinary](SalesOrdersServiceItemTermsUpdateRequest.md#tobinary)
- [toJSON](SalesOrdersServiceItemTermsUpdateRequest.md#tojson)
- [toJson](SalesOrdersServiceItemTermsUpdateRequest.md#tojson-1)
- [toJsonString](SalesOrdersServiceItemTermsUpdateRequest.md#tojsonstring)
- [equals](SalesOrdersServiceItemTermsUpdateRequest.md#equals-1)
- [fromBinary](SalesOrdersServiceItemTermsUpdateRequest.md#frombinary-1)
- [fromJson](SalesOrdersServiceItemTermsUpdateRequest.md#fromjson-1)
- [fromJsonString](SalesOrdersServiceItemTermsUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrdersServiceItemTermsUpdateRequest**(`data?`): [`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md)\> |

#### Returns

[`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md)

#### Overrides

Message\&lt;SalesOrdersServiceItemTermsUpdateRequest\&gt;.constructor

#### Defined in

[src/sales_orders.scailo_pb.ts:2357](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2357)

## Properties

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

[src/sales_orders.scailo_pb.ts:2339](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2339)

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

[src/sales_orders.scailo_pb.ts:2323](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2323)

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

[src/sales_orders.scailo_pb.ts:2355](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2355)

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

[src/sales_orders.scailo_pb.ts:2307](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2307)

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

[src/sales_orders.scailo_pb.ts:2291](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2291)

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

[src/sales_orders.scailo_pb.ts:2259](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2259)

___

### uuid

• **uuid**: `string` = `""`

**`Mandatory`**

**`Description`**

The globally unique identifier (UUID) of the target record that needs to be updated.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

Must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string uuid = 2;

#### Defined in

[src/sales_orders.scailo_pb.ts:2275](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2275)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_orders.scailo_pb.ts:2364](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2364)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_orders.scailo_pb.ts:2362](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2362)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrdersServiceItemTermsUpdateRequest"``

#### Defined in

[src/sales_orders.scailo_pb.ts:2363](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2363)

## Methods

### clone

▸ **clone**(): [`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md)

Create a deep copy.

#### Returns

[`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md)\> |
| `b` | `undefined` \| [`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_orders.scailo_pb.ts:2386](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2386)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:2374](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2374)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:2378](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2378)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceItemTermsUpdateRequest`](SalesOrdersServiceItemTermsUpdateRequest.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:2382](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_orders.scailo_pb.ts#L2382)
