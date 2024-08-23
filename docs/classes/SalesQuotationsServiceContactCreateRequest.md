[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesQuotationsServiceContactCreateRequest

# Class: SalesQuotationsServiceContactCreateRequest

Describes the parameters necessary to create a sales quotation contact

**`Generated`**

from message Scailo.SalesQuotationsServiceContactCreateRequest

## Hierarchy

- `Message`\<[`SalesQuotationsServiceContactCreateRequest`](SalesQuotationsServiceContactCreateRequest.md)\>

  ↳ **`SalesQuotationsServiceContactCreateRequest`**

## Table of contents

### Constructors

- [constructor](SalesQuotationsServiceContactCreateRequest.md#constructor)

### Properties

- [associateId](SalesQuotationsServiceContactCreateRequest.md#associateid)
- [salesQuotationId](SalesQuotationsServiceContactCreateRequest.md#salesquotationid)
- [userComment](SalesQuotationsServiceContactCreateRequest.md#usercomment)
- [fields](SalesQuotationsServiceContactCreateRequest.md#fields)
- [runtime](SalesQuotationsServiceContactCreateRequest.md#runtime)
- [typeName](SalesQuotationsServiceContactCreateRequest.md#typename)

### Methods

- [clone](SalesQuotationsServiceContactCreateRequest.md#clone)
- [equals](SalesQuotationsServiceContactCreateRequest.md#equals)
- [fromBinary](SalesQuotationsServiceContactCreateRequest.md#frombinary)
- [fromJson](SalesQuotationsServiceContactCreateRequest.md#fromjson)
- [fromJsonString](SalesQuotationsServiceContactCreateRequest.md#fromjsonstring)
- [getType](SalesQuotationsServiceContactCreateRequest.md#gettype)
- [toBinary](SalesQuotationsServiceContactCreateRequest.md#tobinary)
- [toJSON](SalesQuotationsServiceContactCreateRequest.md#tojson)
- [toJson](SalesQuotationsServiceContactCreateRequest.md#tojson-1)
- [toJsonString](SalesQuotationsServiceContactCreateRequest.md#tojsonstring)
- [equals](SalesQuotationsServiceContactCreateRequest.md#equals-1)
- [fromBinary](SalesQuotationsServiceContactCreateRequest.md#frombinary-1)
- [fromJson](SalesQuotationsServiceContactCreateRequest.md#fromjson-1)
- [fromJsonString](SalesQuotationsServiceContactCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesQuotationsServiceContactCreateRequest**(`data?`): [`SalesQuotationsServiceContactCreateRequest`](SalesQuotationsServiceContactCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesQuotationsServiceContactCreateRequest`](SalesQuotationsServiceContactCreateRequest.md)\> |

#### Returns

[`SalesQuotationsServiceContactCreateRequest`](SalesQuotationsServiceContactCreateRequest.md)

#### Overrides

Message\&lt;SalesQuotationsServiceContactCreateRequest\&gt;.constructor

#### Defined in

src/sales_quotations.scailo_pb.ts:2850

## Properties

### associateId

• **associateId**: `bigint` = `protoInt64.zero`

Stores the associate ID

**`Generated`**

from field: uint64 associate_id = 11;

#### Defined in

src/sales_quotations.scailo_pb.ts:2848

___

### salesQuotationId

• **salesQuotationId**: `bigint` = `protoInt64.zero`

Stores the sales quotation ID

**`Generated`**

from field: uint64 sales_quotation_id = 10;

#### Defined in

src/sales_quotations.scailo_pb.ts:2841

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/sales_quotations.scailo_pb.ts:2834

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_quotations.scailo_pb.ts:2857

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_quotations.scailo_pb.ts:2855

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesQuotationsServiceContactCreateRequest"``

#### Defined in

src/sales_quotations.scailo_pb.ts:2856

## Methods

### clone

▸ **clone**(): [`SalesQuotationsServiceContactCreateRequest`](SalesQuotationsServiceContactCreateRequest.md)

Create a deep copy.

#### Returns

[`SalesQuotationsServiceContactCreateRequest`](SalesQuotationsServiceContactCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesQuotationsServiceContactCreateRequest`](SalesQuotationsServiceContactCreateRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceContactCreateRequest`](SalesQuotationsServiceContactCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesQuotationsServiceContactCreateRequest`](SalesQuotationsServiceContactCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesQuotationsServiceContactCreateRequest`](SalesQuotationsServiceContactCreateRequest.md)\>

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
| `a` | `undefined` \| [`SalesQuotationsServiceContactCreateRequest`](SalesQuotationsServiceContactCreateRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceContactCreateRequest`](SalesQuotationsServiceContactCreateRequest.md)\> |
| `b` | `undefined` \| [`SalesQuotationsServiceContactCreateRequest`](SalesQuotationsServiceContactCreateRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceContactCreateRequest`](SalesQuotationsServiceContactCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_quotations.scailo_pb.ts:2875

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesQuotationsServiceContactCreateRequest`](SalesQuotationsServiceContactCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesQuotationsServiceContactCreateRequest`](SalesQuotationsServiceContactCreateRequest.md)

#### Defined in

src/sales_quotations.scailo_pb.ts:2863

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesQuotationsServiceContactCreateRequest`](SalesQuotationsServiceContactCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServiceContactCreateRequest`](SalesQuotationsServiceContactCreateRequest.md)

#### Defined in

src/sales_quotations.scailo_pb.ts:2867

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesQuotationsServiceContactCreateRequest`](SalesQuotationsServiceContactCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServiceContactCreateRequest`](SalesQuotationsServiceContactCreateRequest.md)

#### Defined in

src/sales_quotations.scailo_pb.ts:2871
