[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiriesServiceContactCreateRequest

# Class: SalesEnquiriesServiceContactCreateRequest

Describes the parameters necessary to create a sales enquiry contact

**`Generated`**

from message Scailo.SalesEnquiriesServiceContactCreateRequest

## Hierarchy

- `Message`\<[`SalesEnquiriesServiceContactCreateRequest`](SalesEnquiriesServiceContactCreateRequest.md)\>

  ↳ **`SalesEnquiriesServiceContactCreateRequest`**

## Table of contents

### Constructors

- [constructor](SalesEnquiriesServiceContactCreateRequest.md#constructor)

### Properties

- [associateId](SalesEnquiriesServiceContactCreateRequest.md#associateid)
- [salesEnquiryId](SalesEnquiriesServiceContactCreateRequest.md#salesenquiryid)
- [userComment](SalesEnquiriesServiceContactCreateRequest.md#usercomment)
- [fields](SalesEnquiriesServiceContactCreateRequest.md#fields)
- [runtime](SalesEnquiriesServiceContactCreateRequest.md#runtime)
- [typeName](SalesEnquiriesServiceContactCreateRequest.md#typename)

### Methods

- [clone](SalesEnquiriesServiceContactCreateRequest.md#clone)
- [equals](SalesEnquiriesServiceContactCreateRequest.md#equals)
- [fromBinary](SalesEnquiriesServiceContactCreateRequest.md#frombinary)
- [fromJson](SalesEnquiriesServiceContactCreateRequest.md#fromjson)
- [fromJsonString](SalesEnquiriesServiceContactCreateRequest.md#fromjsonstring)
- [getType](SalesEnquiriesServiceContactCreateRequest.md#gettype)
- [toBinary](SalesEnquiriesServiceContactCreateRequest.md#tobinary)
- [toJSON](SalesEnquiriesServiceContactCreateRequest.md#tojson)
- [toJson](SalesEnquiriesServiceContactCreateRequest.md#tojson-1)
- [toJsonString](SalesEnquiriesServiceContactCreateRequest.md#tojsonstring)
- [equals](SalesEnquiriesServiceContactCreateRequest.md#equals-1)
- [fromBinary](SalesEnquiriesServiceContactCreateRequest.md#frombinary-1)
- [fromJson](SalesEnquiriesServiceContactCreateRequest.md#fromjson-1)
- [fromJsonString](SalesEnquiriesServiceContactCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiriesServiceContactCreateRequest**(`data?`): [`SalesEnquiriesServiceContactCreateRequest`](SalesEnquiriesServiceContactCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesEnquiriesServiceContactCreateRequest`](SalesEnquiriesServiceContactCreateRequest.md)\> |

#### Returns

[`SalesEnquiriesServiceContactCreateRequest`](SalesEnquiriesServiceContactCreateRequest.md)

#### Overrides

Message\&lt;SalesEnquiriesServiceContactCreateRequest\&gt;.constructor

#### Defined in

src/sales_enquiries.scailo_pb.ts:2322

## Properties

### associateId

• **associateId**: `bigint` = `protoInt64.zero`

Stores the associate ID

**`Generated`**

from field: uint64 associate_id = 11;

#### Defined in

src/sales_enquiries.scailo_pb.ts:2320

___

### salesEnquiryId

• **salesEnquiryId**: `bigint` = `protoInt64.zero`

Stores the sales enquiry ID

**`Generated`**

from field: uint64 sales_enquiry_id = 10;

#### Defined in

src/sales_enquiries.scailo_pb.ts:2313

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/sales_enquiries.scailo_pb.ts:2306

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_enquiries.scailo_pb.ts:2329

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_enquiries.scailo_pb.ts:2327

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesEnquiriesServiceContactCreateRequest"``

#### Defined in

src/sales_enquiries.scailo_pb.ts:2328

## Methods

### clone

▸ **clone**(): [`SalesEnquiriesServiceContactCreateRequest`](SalesEnquiriesServiceContactCreateRequest.md)

Create a deep copy.

#### Returns

[`SalesEnquiriesServiceContactCreateRequest`](SalesEnquiriesServiceContactCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiriesServiceContactCreateRequest`](SalesEnquiriesServiceContactCreateRequest.md) \| `PlainMessage`\<[`SalesEnquiriesServiceContactCreateRequest`](SalesEnquiriesServiceContactCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesEnquiriesServiceContactCreateRequest`](SalesEnquiriesServiceContactCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesEnquiriesServiceContactCreateRequest`](SalesEnquiriesServiceContactCreateRequest.md)\>

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
| `a` | `undefined` \| [`SalesEnquiriesServiceContactCreateRequest`](SalesEnquiriesServiceContactCreateRequest.md) \| `PlainMessage`\<[`SalesEnquiriesServiceContactCreateRequest`](SalesEnquiriesServiceContactCreateRequest.md)\> |
| `b` | `undefined` \| [`SalesEnquiriesServiceContactCreateRequest`](SalesEnquiriesServiceContactCreateRequest.md) \| `PlainMessage`\<[`SalesEnquiriesServiceContactCreateRequest`](SalesEnquiriesServiceContactCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_enquiries.scailo_pb.ts:2347

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiriesServiceContactCreateRequest`](SalesEnquiriesServiceContactCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceContactCreateRequest`](SalesEnquiriesServiceContactCreateRequest.md)

#### Defined in

src/sales_enquiries.scailo_pb.ts:2335

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiriesServiceContactCreateRequest`](SalesEnquiriesServiceContactCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceContactCreateRequest`](SalesEnquiriesServiceContactCreateRequest.md)

#### Defined in

src/sales_enquiries.scailo_pb.ts:2339

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiriesServiceContactCreateRequest`](SalesEnquiriesServiceContactCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceContactCreateRequest`](SalesEnquiriesServiceContactCreateRequest.md)

#### Defined in

src/sales_enquiries.scailo_pb.ts:2343
