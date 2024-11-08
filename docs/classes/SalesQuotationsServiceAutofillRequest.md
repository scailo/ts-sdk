[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesQuotationsServiceAutofillRequest

# Class: SalesQuotationsServiceAutofillRequest

Describes the parameters necessary to perform an autofill request

**`Generated`**

from message Scailo.SalesQuotationsServiceAutofillRequest

## Hierarchy

- `Message`\<[`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md)\>

  ↳ **`SalesQuotationsServiceAutofillRequest`**

## Table of contents

### Constructors

- [constructor](SalesQuotationsServiceAutofillRequest.md#constructor)

### Properties

- [userComment](SalesQuotationsServiceAutofillRequest.md#usercomment)
- [uuid](SalesQuotationsServiceAutofillRequest.md#uuid)
- [fields](SalesQuotationsServiceAutofillRequest.md#fields)
- [runtime](SalesQuotationsServiceAutofillRequest.md#runtime)
- [typeName](SalesQuotationsServiceAutofillRequest.md#typename)

### Methods

- [clone](SalesQuotationsServiceAutofillRequest.md#clone)
- [equals](SalesQuotationsServiceAutofillRequest.md#equals)
- [fromBinary](SalesQuotationsServiceAutofillRequest.md#frombinary)
- [fromJson](SalesQuotationsServiceAutofillRequest.md#fromjson)
- [fromJsonString](SalesQuotationsServiceAutofillRequest.md#fromjsonstring)
- [getType](SalesQuotationsServiceAutofillRequest.md#gettype)
- [toBinary](SalesQuotationsServiceAutofillRequest.md#tobinary)
- [toJSON](SalesQuotationsServiceAutofillRequest.md#tojson)
- [toJson](SalesQuotationsServiceAutofillRequest.md#tojson-1)
- [toJsonString](SalesQuotationsServiceAutofillRequest.md#tojsonstring)
- [equals](SalesQuotationsServiceAutofillRequest.md#equals-1)
- [fromBinary](SalesQuotationsServiceAutofillRequest.md#frombinary-1)
- [fromJson](SalesQuotationsServiceAutofillRequest.md#fromjson-1)
- [fromJsonString](SalesQuotationsServiceAutofillRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesQuotationsServiceAutofillRequest**(`data?`): [`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md)\> |

#### Returns

[`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md)

#### Overrides

Message\&lt;SalesQuotationsServiceAutofillRequest\&gt;.constructor

#### Defined in

src/sales_quotations.scailo_pb.ts:701

## Properties

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/sales_quotations.scailo_pb.ts:692

___

### uuid

• **uuid**: `string` = `""`

The UUID of the record that needs to be updated

**`Generated`**

from field: string uuid = 2;

#### Defined in

src/sales_quotations.scailo_pb.ts:699

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_quotations.scailo_pb.ts:708

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_quotations.scailo_pb.ts:706

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesQuotationsServiceAutofillRequest"``

#### Defined in

src/sales_quotations.scailo_pb.ts:707

## Methods

### clone

▸ **clone**(): [`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md)

Create a deep copy.

#### Returns

[`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md)\>

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
| `a` | `undefined` \| [`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md)\> |
| `b` | `undefined` \| [`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_quotations.scailo_pb.ts:725

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md)

#### Defined in

src/sales_quotations.scailo_pb.ts:713

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md)

#### Defined in

src/sales_quotations.scailo_pb.ts:717

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md)

#### Defined in

src/sales_quotations.scailo_pb.ts:721
