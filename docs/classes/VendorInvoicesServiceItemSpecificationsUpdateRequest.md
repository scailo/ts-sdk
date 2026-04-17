[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorInvoicesServiceItemSpecificationsUpdateRequest

# Class: VendorInvoicesServiceItemSpecificationsUpdateRequest

Describes the parameters required to update the specifications of an item in a vendor invoice

**`Generated`**

from message Scailo.VendorInvoicesServiceItemSpecificationsUpdateRequest

## Hierarchy

- `Message`\<[`VendorInvoicesServiceItemSpecificationsUpdateRequest`](VendorInvoicesServiceItemSpecificationsUpdateRequest.md)\>

  ↳ **`VendorInvoicesServiceItemSpecificationsUpdateRequest`**

## Table of contents

### Constructors

- [constructor](VendorInvoicesServiceItemSpecificationsUpdateRequest.md#constructor)

### Properties

- [specifications](VendorInvoicesServiceItemSpecificationsUpdateRequest.md#specifications)
- [userComment](VendorInvoicesServiceItemSpecificationsUpdateRequest.md#usercomment)
- [uuid](VendorInvoicesServiceItemSpecificationsUpdateRequest.md#uuid)
- [fields](VendorInvoicesServiceItemSpecificationsUpdateRequest.md#fields)
- [runtime](VendorInvoicesServiceItemSpecificationsUpdateRequest.md#runtime)
- [typeName](VendorInvoicesServiceItemSpecificationsUpdateRequest.md#typename)

### Methods

- [clone](VendorInvoicesServiceItemSpecificationsUpdateRequest.md#clone)
- [equals](VendorInvoicesServiceItemSpecificationsUpdateRequest.md#equals)
- [fromBinary](VendorInvoicesServiceItemSpecificationsUpdateRequest.md#frombinary)
- [fromJson](VendorInvoicesServiceItemSpecificationsUpdateRequest.md#fromjson)
- [fromJsonString](VendorInvoicesServiceItemSpecificationsUpdateRequest.md#fromjsonstring)
- [getType](VendorInvoicesServiceItemSpecificationsUpdateRequest.md#gettype)
- [toBinary](VendorInvoicesServiceItemSpecificationsUpdateRequest.md#tobinary)
- [toJSON](VendorInvoicesServiceItemSpecificationsUpdateRequest.md#tojson)
- [toJson](VendorInvoicesServiceItemSpecificationsUpdateRequest.md#tojson-1)
- [toJsonString](VendorInvoicesServiceItemSpecificationsUpdateRequest.md#tojsonstring)
- [equals](VendorInvoicesServiceItemSpecificationsUpdateRequest.md#equals-1)
- [fromBinary](VendorInvoicesServiceItemSpecificationsUpdateRequest.md#frombinary-1)
- [fromJson](VendorInvoicesServiceItemSpecificationsUpdateRequest.md#fromjson-1)
- [fromJsonString](VendorInvoicesServiceItemSpecificationsUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorInvoicesServiceItemSpecificationsUpdateRequest**(`data?`): [`VendorInvoicesServiceItemSpecificationsUpdateRequest`](VendorInvoicesServiceItemSpecificationsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorInvoicesServiceItemSpecificationsUpdateRequest`](VendorInvoicesServiceItemSpecificationsUpdateRequest.md)\> |

#### Returns

[`VendorInvoicesServiceItemSpecificationsUpdateRequest`](VendorInvoicesServiceItemSpecificationsUpdateRequest.md)

#### Overrides

Message\&lt;VendorInvoicesServiceItemSpecificationsUpdateRequest\&gt;.constructor

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1362](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L1362)

## Properties

### specifications

• **specifications**: `string` = `""`

The specifications that should be updated

**`Generated`**

from field: string specifications = 21;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1360](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L1360)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1346](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L1346)

___

### uuid

• **uuid**: `string` = `""`

The UUID of the record

**`Generated`**

from field: string uuid = 2;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1353](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L1353)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1369](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L1369)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1367](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L1367)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorInvoicesServiceItemSpecificationsUpdateRequest"``

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1368](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L1368)

## Methods

### clone

▸ **clone**(): [`VendorInvoicesServiceItemSpecificationsUpdateRequest`](VendorInvoicesServiceItemSpecificationsUpdateRequest.md)

Create a deep copy.

#### Returns

[`VendorInvoicesServiceItemSpecificationsUpdateRequest`](VendorInvoicesServiceItemSpecificationsUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorInvoicesServiceItemSpecificationsUpdateRequest`](VendorInvoicesServiceItemSpecificationsUpdateRequest.md) \| `PlainMessage`\<[`VendorInvoicesServiceItemSpecificationsUpdateRequest`](VendorInvoicesServiceItemSpecificationsUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorInvoicesServiceItemSpecificationsUpdateRequest`](VendorInvoicesServiceItemSpecificationsUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorInvoicesServiceItemSpecificationsUpdateRequest`](VendorInvoicesServiceItemSpecificationsUpdateRequest.md)\>

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
| `a` | `undefined` \| [`VendorInvoicesServiceItemSpecificationsUpdateRequest`](VendorInvoicesServiceItemSpecificationsUpdateRequest.md) \| `PlainMessage`\<[`VendorInvoicesServiceItemSpecificationsUpdateRequest`](VendorInvoicesServiceItemSpecificationsUpdateRequest.md)\> |
| `b` | `undefined` \| [`VendorInvoicesServiceItemSpecificationsUpdateRequest`](VendorInvoicesServiceItemSpecificationsUpdateRequest.md) \| `PlainMessage`\<[`VendorInvoicesServiceItemSpecificationsUpdateRequest`](VendorInvoicesServiceItemSpecificationsUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1387](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L1387)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorInvoicesServiceItemSpecificationsUpdateRequest`](VendorInvoicesServiceItemSpecificationsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorInvoicesServiceItemSpecificationsUpdateRequest`](VendorInvoicesServiceItemSpecificationsUpdateRequest.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1375](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L1375)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorInvoicesServiceItemSpecificationsUpdateRequest`](VendorInvoicesServiceItemSpecificationsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServiceItemSpecificationsUpdateRequest`](VendorInvoicesServiceItemSpecificationsUpdateRequest.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1379](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L1379)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorInvoicesServiceItemSpecificationsUpdateRequest`](VendorInvoicesServiceItemSpecificationsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServiceItemSpecificationsUpdateRequest`](VendorInvoicesServiceItemSpecificationsUpdateRequest.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:1383](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendor_invoices.scailo_pb.ts#L1383)
