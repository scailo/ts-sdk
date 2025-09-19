[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrdersServiceAutofillRequest

# Class: SalesOrdersServiceAutofillRequest

Describes the parameters necessary to perform an autofill request

**`Generated`**

from message Scailo.SalesOrdersServiceAutofillRequest

## Hierarchy

- `Message`\<[`SalesOrdersServiceAutofillRequest`](SalesOrdersServiceAutofillRequest.md)\>

  ↳ **`SalesOrdersServiceAutofillRequest`**

## Table of contents

### Constructors

- [constructor](SalesOrdersServiceAutofillRequest.md#constructor)

### Properties

- [userComment](SalesOrdersServiceAutofillRequest.md#usercomment)
- [uuid](SalesOrdersServiceAutofillRequest.md#uuid)
- [fields](SalesOrdersServiceAutofillRequest.md#fields)
- [runtime](SalesOrdersServiceAutofillRequest.md#runtime)
- [typeName](SalesOrdersServiceAutofillRequest.md#typename)

### Methods

- [clone](SalesOrdersServiceAutofillRequest.md#clone)
- [equals](SalesOrdersServiceAutofillRequest.md#equals)
- [fromBinary](SalesOrdersServiceAutofillRequest.md#frombinary)
- [fromJson](SalesOrdersServiceAutofillRequest.md#fromjson)
- [fromJsonString](SalesOrdersServiceAutofillRequest.md#fromjsonstring)
- [getType](SalesOrdersServiceAutofillRequest.md#gettype)
- [toBinary](SalesOrdersServiceAutofillRequest.md#tobinary)
- [toJSON](SalesOrdersServiceAutofillRequest.md#tojson)
- [toJson](SalesOrdersServiceAutofillRequest.md#tojson-1)
- [toJsonString](SalesOrdersServiceAutofillRequest.md#tojsonstring)
- [equals](SalesOrdersServiceAutofillRequest.md#equals-1)
- [fromBinary](SalesOrdersServiceAutofillRequest.md#frombinary-1)
- [fromJson](SalesOrdersServiceAutofillRequest.md#fromjson-1)
- [fromJsonString](SalesOrdersServiceAutofillRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrdersServiceAutofillRequest**(`data?`): [`SalesOrdersServiceAutofillRequest`](SalesOrdersServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrdersServiceAutofillRequest`](SalesOrdersServiceAutofillRequest.md)\> |

#### Returns

[`SalesOrdersServiceAutofillRequest`](SalesOrdersServiceAutofillRequest.md)

#### Overrides

Message\&lt;SalesOrdersServiceAutofillRequest\&gt;.constructor

#### Defined in

[src/sales_orders.scailo_pb.ts:723](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L723)

## Properties

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/sales_orders.scailo_pb.ts:714](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L714)

___

### uuid

• **uuid**: `string` = `""`

The UUID of the record that needs to be updated

**`Generated`**

from field: string uuid = 2;

#### Defined in

[src/sales_orders.scailo_pb.ts:721](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L721)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_orders.scailo_pb.ts:730](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L730)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_orders.scailo_pb.ts:728](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L728)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrdersServiceAutofillRequest"``

#### Defined in

[src/sales_orders.scailo_pb.ts:729](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L729)

## Methods

### clone

▸ **clone**(): [`SalesOrdersServiceAutofillRequest`](SalesOrdersServiceAutofillRequest.md)

Create a deep copy.

#### Returns

[`SalesOrdersServiceAutofillRequest`](SalesOrdersServiceAutofillRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrdersServiceAutofillRequest`](SalesOrdersServiceAutofillRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceAutofillRequest`](SalesOrdersServiceAutofillRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrdersServiceAutofillRequest`](SalesOrdersServiceAutofillRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrdersServiceAutofillRequest`](SalesOrdersServiceAutofillRequest.md)\>

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
| `a` | `undefined` \| [`SalesOrdersServiceAutofillRequest`](SalesOrdersServiceAutofillRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceAutofillRequest`](SalesOrdersServiceAutofillRequest.md)\> |
| `b` | `undefined` \| [`SalesOrdersServiceAutofillRequest`](SalesOrdersServiceAutofillRequest.md) \| `PlainMessage`\<[`SalesOrdersServiceAutofillRequest`](SalesOrdersServiceAutofillRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_orders.scailo_pb.ts:747](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L747)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrdersServiceAutofillRequest`](SalesOrdersServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrdersServiceAutofillRequest`](SalesOrdersServiceAutofillRequest.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:735](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L735)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrdersServiceAutofillRequest`](SalesOrdersServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceAutofillRequest`](SalesOrdersServiceAutofillRequest.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:739](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L739)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrdersServiceAutofillRequest`](SalesOrdersServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceAutofillRequest`](SalesOrdersServiceAutofillRequest.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:743](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L743)
