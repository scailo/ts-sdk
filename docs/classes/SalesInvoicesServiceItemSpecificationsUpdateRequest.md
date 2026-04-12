[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoicesServiceItemSpecificationsUpdateRequest

# Class: SalesInvoicesServiceItemSpecificationsUpdateRequest

Describes the parameters required to update the specifications of an item in a sales invoice

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

[src/sales_invoices.scailo_pb.ts:1386](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_invoices.scailo_pb.ts#L1386)

## Properties

### specifications

• **specifications**: `string` = `""`

The specifications that should be updated

**`Generated`**

from field: string specifications = 21;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1384](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_invoices.scailo_pb.ts#L1384)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1370](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_invoices.scailo_pb.ts#L1370)

___

### uuid

• **uuid**: `string` = `""`

The UUID of the record

**`Generated`**

from field: string uuid = 2;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1377](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_invoices.scailo_pb.ts#L1377)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_invoices.scailo_pb.ts:1393](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_invoices.scailo_pb.ts#L1393)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_invoices.scailo_pb.ts:1391](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_invoices.scailo_pb.ts#L1391)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoicesServiceItemSpecificationsUpdateRequest"``

#### Defined in

[src/sales_invoices.scailo_pb.ts:1392](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_invoices.scailo_pb.ts#L1392)

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

[src/sales_invoices.scailo_pb.ts:1411](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_invoices.scailo_pb.ts#L1411)

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

[src/sales_invoices.scailo_pb.ts:1399](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_invoices.scailo_pb.ts#L1399)

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

[src/sales_invoices.scailo_pb.ts:1403](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_invoices.scailo_pb.ts#L1403)

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

[src/sales_invoices.scailo_pb.ts:1407](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_invoices.scailo_pb.ts#L1407)
