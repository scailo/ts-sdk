[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoicesServiceItemSpecificationsUpdateRequest

# Class: SalesInvoicesServiceItemSpecificationsUpdateRequest

Request message for isolating updates strictly to the textual specifications or notes
of a Sales Invoice line item.
Designed for scenarios where operational instructions change without impacting any
commercial terms, pricing, or quantities.

**`Generated`**

from message Scailo.SalesInvoicesServiceItemSpecificationsUpdateRequest

## Hierarchy

- `Message`\<[`SalesInvoicesServiceItemSpecificationsUpdateRequest`](SalesInvoicesServiceItemSpecificationsUpdateRequest.md)\>

  ↳ **`SalesInvoicesServiceItemSpecificationsUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SalesInvoicesServiceItemSpecificationsUpdateRequest.md#constructor)

### Properties

- [specifications](SalesInvoicesServiceItemSpecificationsUpdateRequest.md#specifications)
- [userComment](SalesInvoicesServiceItemSpecificationsUpdateRequest.md#usercomment)
- [uuid](SalesInvoicesServiceItemSpecificationsUpdateRequest.md#uuid)
- [fields](SalesInvoicesServiceItemSpecificationsUpdateRequest.md#fields)
- [runtime](SalesInvoicesServiceItemSpecificationsUpdateRequest.md#runtime)
- [typeName](SalesInvoicesServiceItemSpecificationsUpdateRequest.md#typename)

### Methods

- [clone](SalesInvoicesServiceItemSpecificationsUpdateRequest.md#clone)
- [equals](SalesInvoicesServiceItemSpecificationsUpdateRequest.md#equals)
- [fromBinary](SalesInvoicesServiceItemSpecificationsUpdateRequest.md#frombinary)
- [fromJson](SalesInvoicesServiceItemSpecificationsUpdateRequest.md#fromjson)
- [fromJsonString](SalesInvoicesServiceItemSpecificationsUpdateRequest.md#fromjsonstring)
- [getType](SalesInvoicesServiceItemSpecificationsUpdateRequest.md#gettype)
- [toBinary](SalesInvoicesServiceItemSpecificationsUpdateRequest.md#tobinary)
- [toJSON](SalesInvoicesServiceItemSpecificationsUpdateRequest.md#tojson)
- [toJson](SalesInvoicesServiceItemSpecificationsUpdateRequest.md#tojson-1)
- [toJsonString](SalesInvoicesServiceItemSpecificationsUpdateRequest.md#tojsonstring)
- [equals](SalesInvoicesServiceItemSpecificationsUpdateRequest.md#equals-1)
- [fromBinary](SalesInvoicesServiceItemSpecificationsUpdateRequest.md#frombinary-1)
- [fromJson](SalesInvoicesServiceItemSpecificationsUpdateRequest.md#fromjson-1)
- [fromJsonString](SalesInvoicesServiceItemSpecificationsUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoicesServiceItemSpecificationsUpdateRequest**(`data?`): [`SalesInvoicesServiceItemSpecificationsUpdateRequest`](SalesInvoicesServiceItemSpecificationsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoicesServiceItemSpecificationsUpdateRequest`](SalesInvoicesServiceItemSpecificationsUpdateRequest.md)\> |

#### Returns

[`SalesInvoicesServiceItemSpecificationsUpdateRequest`](SalesInvoicesServiceItemSpecificationsUpdateRequest.md)

#### Overrides

Message\&lt;SalesInvoicesServiceItemSpecificationsUpdateRequest\&gt;.constructor

#### Defined in

[src/sales_invoices.scailo_pb.ts:2021](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L2021)

## Properties

### specifications

• **specifications**: `string` = `""`

**`Mandatory`**

**`Description`**

The completely overwritten textual requirements, manufacturing notes, or specifications for fulfilling this item.

**`Example`**

```ts
"Expedite handling required. Use pallet configuration A."
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string specifications = 21;

#### Defined in

[src/sales_invoices.scailo_pb.ts:2019](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L2019)

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

[src/sales_invoices.scailo_pb.ts:1987](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L1987)

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

[src/sales_invoices.scailo_pb.ts:2003](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L2003)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_invoices.scailo_pb.ts:2028](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L2028)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_invoices.scailo_pb.ts:2026](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L2026)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoicesServiceItemSpecificationsUpdateRequest"``

#### Defined in

[src/sales_invoices.scailo_pb.ts:2027](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L2027)

## Methods

### clone

▸ **clone**(): [`SalesInvoicesServiceItemSpecificationsUpdateRequest`](SalesInvoicesServiceItemSpecificationsUpdateRequest.md)

Create a deep copy.

#### Returns

[`SalesInvoicesServiceItemSpecificationsUpdateRequest`](SalesInvoicesServiceItemSpecificationsUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoicesServiceItemSpecificationsUpdateRequest`](SalesInvoicesServiceItemSpecificationsUpdateRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceItemSpecificationsUpdateRequest`](SalesInvoicesServiceItemSpecificationsUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoicesServiceItemSpecificationsUpdateRequest`](SalesInvoicesServiceItemSpecificationsUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoicesServiceItemSpecificationsUpdateRequest`](SalesInvoicesServiceItemSpecificationsUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SalesInvoicesServiceItemSpecificationsUpdateRequest`](SalesInvoicesServiceItemSpecificationsUpdateRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceItemSpecificationsUpdateRequest`](SalesInvoicesServiceItemSpecificationsUpdateRequest.md)\> |
| `b` | `undefined` \| [`SalesInvoicesServiceItemSpecificationsUpdateRequest`](SalesInvoicesServiceItemSpecificationsUpdateRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceItemSpecificationsUpdateRequest`](SalesInvoicesServiceItemSpecificationsUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_invoices.scailo_pb.ts:2046](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L2046)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoicesServiceItemSpecificationsUpdateRequest`](SalesInvoicesServiceItemSpecificationsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoicesServiceItemSpecificationsUpdateRequest`](SalesInvoicesServiceItemSpecificationsUpdateRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:2034](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L2034)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoicesServiceItemSpecificationsUpdateRequest`](SalesInvoicesServiceItemSpecificationsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceItemSpecificationsUpdateRequest`](SalesInvoicesServiceItemSpecificationsUpdateRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:2038](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L2038)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoicesServiceItemSpecificationsUpdateRequest`](SalesInvoicesServiceItemSpecificationsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceItemSpecificationsUpdateRequest`](SalesInvoicesServiceItemSpecificationsUpdateRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:2042](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L2042)
