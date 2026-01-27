[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProformaInvoicesServiceItemSpecificationsUpdateRequest

# Class: ProformaInvoicesServiceItemSpecificationsUpdateRequest

Describes the parameters required to update the specifications of an item in a proforma invoice

**`Generated`**

from message Scailo.ProformaInvoicesServiceItemSpecificationsUpdateRequest

## Hierarchy

- `Message`\<[`ProformaInvoicesServiceItemSpecificationsUpdateRequest`](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md)\>

  ↳ **`ProformaInvoicesServiceItemSpecificationsUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md#constructor)

### Properties

- [specifications](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md#specifications)
- [userComment](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md#usercomment)
- [uuid](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md#uuid)
- [fields](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md#fields)
- [runtime](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md#runtime)
- [typeName](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md#typename)

### Methods

- [clone](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md#clone)
- [equals](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md#equals)
- [fromBinary](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md#frombinary)
- [fromJson](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md#fromjson)
- [fromJsonString](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md#fromjsonstring)
- [getType](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md#gettype)
- [toBinary](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md#tobinary)
- [toJSON](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md#tojson)
- [toJson](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md#tojson-1)
- [toJsonString](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md#tojsonstring)
- [equals](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md#equals-1)
- [fromBinary](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md#frombinary-1)
- [fromJson](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md#fromjson-1)
- [fromJsonString](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProformaInvoicesServiceItemSpecificationsUpdateRequest**(`data?`): [`ProformaInvoicesServiceItemSpecificationsUpdateRequest`](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProformaInvoicesServiceItemSpecificationsUpdateRequest`](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md)\> |

#### Returns

[`ProformaInvoicesServiceItemSpecificationsUpdateRequest`](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md)

#### Overrides

Message\&lt;ProformaInvoicesServiceItemSpecificationsUpdateRequest\&gt;.constructor

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1352](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/proforma_invoices.scailo_pb.ts#L1352)

## Properties

### specifications

• **specifications**: `string` = `""`

The specifications that should be updated

**`Generated`**

from field: string specifications = 21;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1350](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/proforma_invoices.scailo_pb.ts#L1350)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1336](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/proforma_invoices.scailo_pb.ts#L1336)

___

### uuid

• **uuid**: `string` = `""`

The UUID of the record

**`Generated`**

from field: string uuid = 2;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1343](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/proforma_invoices.scailo_pb.ts#L1343)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1359](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/proforma_invoices.scailo_pb.ts#L1359)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1357](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/proforma_invoices.scailo_pb.ts#L1357)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProformaInvoicesServiceItemSpecificationsUpdateRequest"``

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1358](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/proforma_invoices.scailo_pb.ts#L1358)

## Methods

### clone

▸ **clone**(): [`ProformaInvoicesServiceItemSpecificationsUpdateRequest`](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md)

Create a deep copy.

#### Returns

[`ProformaInvoicesServiceItemSpecificationsUpdateRequest`](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProformaInvoicesServiceItemSpecificationsUpdateRequest`](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md) \| `PlainMessage`\<[`ProformaInvoicesServiceItemSpecificationsUpdateRequest`](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProformaInvoicesServiceItemSpecificationsUpdateRequest`](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProformaInvoicesServiceItemSpecificationsUpdateRequest`](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md)\>

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
| `a` | `undefined` \| [`ProformaInvoicesServiceItemSpecificationsUpdateRequest`](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md) \| `PlainMessage`\<[`ProformaInvoicesServiceItemSpecificationsUpdateRequest`](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md)\> |
| `b` | `undefined` \| [`ProformaInvoicesServiceItemSpecificationsUpdateRequest`](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md) \| `PlainMessage`\<[`ProformaInvoicesServiceItemSpecificationsUpdateRequest`](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1377](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/proforma_invoices.scailo_pb.ts#L1377)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProformaInvoicesServiceItemSpecificationsUpdateRequest`](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceItemSpecificationsUpdateRequest`](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1365](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/proforma_invoices.scailo_pb.ts#L1365)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProformaInvoicesServiceItemSpecificationsUpdateRequest`](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceItemSpecificationsUpdateRequest`](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1369](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/proforma_invoices.scailo_pb.ts#L1369)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProformaInvoicesServiceItemSpecificationsUpdateRequest`](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceItemSpecificationsUpdateRequest`](ProformaInvoicesServiceItemSpecificationsUpdateRequest.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1373](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/proforma_invoices.scailo_pb.ts#L1373)
