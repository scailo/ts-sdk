[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoicesServiceAutofillRequest

# Class: SalesInvoicesServiceAutofillRequest

Describes the parameters necessary to perform an autofill request

**`Generated`**

from message Scailo.SalesInvoicesServiceAutofillRequest

## Hierarchy

- `Message`\<[`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md)\>

  ↳ **`SalesInvoicesServiceAutofillRequest`**

## Table of contents

### Constructors

- [constructor](SalesInvoicesServiceAutofillRequest.md#constructor)

### Properties

- [includeServices](SalesInvoicesServiceAutofillRequest.md#includeservices)
- [userComment](SalesInvoicesServiceAutofillRequest.md#usercomment)
- [uuid](SalesInvoicesServiceAutofillRequest.md#uuid)
- [fields](SalesInvoicesServiceAutofillRequest.md#fields)
- [runtime](SalesInvoicesServiceAutofillRequest.md#runtime)
- [typeName](SalesInvoicesServiceAutofillRequest.md#typename)

### Methods

- [clone](SalesInvoicesServiceAutofillRequest.md#clone)
- [equals](SalesInvoicesServiceAutofillRequest.md#equals)
- [fromBinary](SalesInvoicesServiceAutofillRequest.md#frombinary)
- [fromJson](SalesInvoicesServiceAutofillRequest.md#fromjson)
- [fromJsonString](SalesInvoicesServiceAutofillRequest.md#fromjsonstring)
- [getType](SalesInvoicesServiceAutofillRequest.md#gettype)
- [toBinary](SalesInvoicesServiceAutofillRequest.md#tobinary)
- [toJSON](SalesInvoicesServiceAutofillRequest.md#tojson)
- [toJson](SalesInvoicesServiceAutofillRequest.md#tojson-1)
- [toJsonString](SalesInvoicesServiceAutofillRequest.md#tojsonstring)
- [equals](SalesInvoicesServiceAutofillRequest.md#equals-1)
- [fromBinary](SalesInvoicesServiceAutofillRequest.md#frombinary-1)
- [fromJson](SalesInvoicesServiceAutofillRequest.md#fromjson-1)
- [fromJsonString](SalesInvoicesServiceAutofillRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoicesServiceAutofillRequest**(`data?`): [`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md)\> |

#### Returns

[`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md)

#### Overrides

Message\&lt;SalesInvoicesServiceAutofillRequest\&gt;.constructor

#### Defined in

[src/sales_invoices.scailo_pb.ts:599](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_invoices.scailo_pb.ts#L599)

## Properties

### includeServices

• **includeServices**: `boolean` = `false`

Stores if services should also be autofilled

**`Generated`**

from field: bool include_services = 10;

#### Defined in

[src/sales_invoices.scailo_pb.ts:597](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_invoices.scailo_pb.ts#L597)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/sales_invoices.scailo_pb.ts:583](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_invoices.scailo_pb.ts#L583)

___

### uuid

• **uuid**: `string` = `""`

The UUID of the record that needs to be updated

**`Generated`**

from field: string uuid = 2;

#### Defined in

[src/sales_invoices.scailo_pb.ts:590](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_invoices.scailo_pb.ts#L590)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_invoices.scailo_pb.ts:606](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_invoices.scailo_pb.ts#L606)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_invoices.scailo_pb.ts:604](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_invoices.scailo_pb.ts#L604)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoicesServiceAutofillRequest"``

#### Defined in

[src/sales_invoices.scailo_pb.ts:605](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_invoices.scailo_pb.ts#L605)

## Methods

### clone

▸ **clone**(): [`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md)

Create a deep copy.

#### Returns

[`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md)\>

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
| `a` | `undefined` \| [`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md)\> |
| `b` | `undefined` \| [`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_invoices.scailo_pb.ts:624](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_invoices.scailo_pb.ts#L624)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:612](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_invoices.scailo_pb.ts#L612)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:616](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_invoices.scailo_pb.ts#L616)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:620](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_invoices.scailo_pb.ts#L620)
