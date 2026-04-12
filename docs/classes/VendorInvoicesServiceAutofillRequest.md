[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorInvoicesServiceAutofillRequest

# Class: VendorInvoicesServiceAutofillRequest

Describes the parameters necessary to perform an autofill request

**`Generated`**

from message Scailo.VendorInvoicesServiceAutofillRequest

## Hierarchy

- `Message`\<[`VendorInvoicesServiceAutofillRequest`](VendorInvoicesServiceAutofillRequest.md)\>

  ↳ **`VendorInvoicesServiceAutofillRequest`**

## Table of contents

### Constructors

- [constructor](VendorInvoicesServiceAutofillRequest.md#constructor)

### Properties

- [includeServices](VendorInvoicesServiceAutofillRequest.md#includeservices)
- [userComment](VendorInvoicesServiceAutofillRequest.md#usercomment)
- [uuid](VendorInvoicesServiceAutofillRequest.md#uuid)
- [fields](VendorInvoicesServiceAutofillRequest.md#fields)
- [runtime](VendorInvoicesServiceAutofillRequest.md#runtime)
- [typeName](VendorInvoicesServiceAutofillRequest.md#typename)

### Methods

- [clone](VendorInvoicesServiceAutofillRequest.md#clone)
- [equals](VendorInvoicesServiceAutofillRequest.md#equals)
- [fromBinary](VendorInvoicesServiceAutofillRequest.md#frombinary)
- [fromJson](VendorInvoicesServiceAutofillRequest.md#fromjson)
- [fromJsonString](VendorInvoicesServiceAutofillRequest.md#fromjsonstring)
- [getType](VendorInvoicesServiceAutofillRequest.md#gettype)
- [toBinary](VendorInvoicesServiceAutofillRequest.md#tobinary)
- [toJSON](VendorInvoicesServiceAutofillRequest.md#tojson)
- [toJson](VendorInvoicesServiceAutofillRequest.md#tojson-1)
- [toJsonString](VendorInvoicesServiceAutofillRequest.md#tojsonstring)
- [equals](VendorInvoicesServiceAutofillRequest.md#equals-1)
- [fromBinary](VendorInvoicesServiceAutofillRequest.md#frombinary-1)
- [fromJson](VendorInvoicesServiceAutofillRequest.md#fromjson-1)
- [fromJsonString](VendorInvoicesServiceAutofillRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorInvoicesServiceAutofillRequest**(`data?`): [`VendorInvoicesServiceAutofillRequest`](VendorInvoicesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorInvoicesServiceAutofillRequest`](VendorInvoicesServiceAutofillRequest.md)\> |

#### Returns

[`VendorInvoicesServiceAutofillRequest`](VendorInvoicesServiceAutofillRequest.md)

#### Overrides

Message\&lt;VendorInvoicesServiceAutofillRequest\&gt;.constructor

#### Defined in

[src/vendor_invoices.scailo_pb.ts:649](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vendor_invoices.scailo_pb.ts#L649)

## Properties

### includeServices

• **includeServices**: `boolean` = `false`

Stores if services should also be autofilled

**`Generated`**

from field: bool include_services = 10;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:647](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vendor_invoices.scailo_pb.ts#L647)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:633](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vendor_invoices.scailo_pb.ts#L633)

___

### uuid

• **uuid**: `string` = `""`

The UUID of the record that needs to be updated

**`Generated`**

from field: string uuid = 2;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:640](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vendor_invoices.scailo_pb.ts#L640)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:656](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vendor_invoices.scailo_pb.ts#L656)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:654](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vendor_invoices.scailo_pb.ts#L654)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorInvoicesServiceAutofillRequest"``

#### Defined in

[src/vendor_invoices.scailo_pb.ts:655](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vendor_invoices.scailo_pb.ts#L655)

## Methods

### clone

▸ **clone**(): [`VendorInvoicesServiceAutofillRequest`](VendorInvoicesServiceAutofillRequest.md)

Create a deep copy.

#### Returns

[`VendorInvoicesServiceAutofillRequest`](VendorInvoicesServiceAutofillRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorInvoicesServiceAutofillRequest`](VendorInvoicesServiceAutofillRequest.md) \| `PlainMessage`\<[`VendorInvoicesServiceAutofillRequest`](VendorInvoicesServiceAutofillRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorInvoicesServiceAutofillRequest`](VendorInvoicesServiceAutofillRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorInvoicesServiceAutofillRequest`](VendorInvoicesServiceAutofillRequest.md)\>

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
| `a` | `undefined` \| [`VendorInvoicesServiceAutofillRequest`](VendorInvoicesServiceAutofillRequest.md) \| `PlainMessage`\<[`VendorInvoicesServiceAutofillRequest`](VendorInvoicesServiceAutofillRequest.md)\> |
| `b` | `undefined` \| [`VendorInvoicesServiceAutofillRequest`](VendorInvoicesServiceAutofillRequest.md) \| `PlainMessage`\<[`VendorInvoicesServiceAutofillRequest`](VendorInvoicesServiceAutofillRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:674](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vendor_invoices.scailo_pb.ts#L674)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorInvoicesServiceAutofillRequest`](VendorInvoicesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorInvoicesServiceAutofillRequest`](VendorInvoicesServiceAutofillRequest.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:662](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vendor_invoices.scailo_pb.ts#L662)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorInvoicesServiceAutofillRequest`](VendorInvoicesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServiceAutofillRequest`](VendorInvoicesServiceAutofillRequest.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:666](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vendor_invoices.scailo_pb.ts#L666)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorInvoicesServiceAutofillRequest`](VendorInvoicesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServiceAutofillRequest`](VendorInvoicesServiceAutofillRequest.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:670](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/vendor_invoices.scailo_pb.ts#L670)
