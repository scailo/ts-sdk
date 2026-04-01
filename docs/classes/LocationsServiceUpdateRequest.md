[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LocationsServiceUpdateRequest

# Class: LocationsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.LocationsServiceUpdateRequest

## Hierarchy

- `Message`\<[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)\>

  ↳ **`LocationsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](LocationsServiceUpdateRequest.md#constructor)

### Properties

- [email](LocationsServiceUpdateRequest.md#email)
- [formData](LocationsServiceUpdateRequest.md#formdata)
- [id](LocationsServiceUpdateRequest.md#id)
- [name](LocationsServiceUpdateRequest.md#name)
- [notifyUsers](LocationsServiceUpdateRequest.md#notifyusers)
- [phone](LocationsServiceUpdateRequest.md#phone)
- [userComment](LocationsServiceUpdateRequest.md#usercomment)
- [fields](LocationsServiceUpdateRequest.md#fields)
- [runtime](LocationsServiceUpdateRequest.md#runtime)
- [typeName](LocationsServiceUpdateRequest.md#typename)

### Methods

- [clone](LocationsServiceUpdateRequest.md#clone)
- [equals](LocationsServiceUpdateRequest.md#equals)
- [fromBinary](LocationsServiceUpdateRequest.md#frombinary)
- [fromJson](LocationsServiceUpdateRequest.md#fromjson)
- [fromJsonString](LocationsServiceUpdateRequest.md#fromjsonstring)
- [getType](LocationsServiceUpdateRequest.md#gettype)
- [toBinary](LocationsServiceUpdateRequest.md#tobinary)
- [toJSON](LocationsServiceUpdateRequest.md#tojson)
- [toJson](LocationsServiceUpdateRequest.md#tojson-1)
- [toJsonString](LocationsServiceUpdateRequest.md#tojsonstring)
- [equals](LocationsServiceUpdateRequest.md#equals-1)
- [fromBinary](LocationsServiceUpdateRequest.md#frombinary-1)
- [fromJson](LocationsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](LocationsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new LocationsServiceUpdateRequest**(`data?`): [`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)\> |

#### Returns

[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)

#### Overrides

Message\&lt;LocationsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/locations.scailo_pb.ts:283](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L283)

## Properties

### email

• **email**: `string` = `""`

// The unique code by which the location is classified
string code = 11 [(buf.validate.field).string = {
  // pattern:   "^[^[0-9]A-Za-z]+( [^[0-9]A-Za-z]+)*$",
  min_len: 1
}];
The primary email of the location

**`Generated`**

from field: string email = 12;

#### Defined in

[src/locations.scailo_pb.ts:267](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L267)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/locations.scailo_pb.ts:281](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L281)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/locations.scailo_pb.ts:236](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L236)

___

### name

• **name**: `string` = `""`

The name of the location

**`Generated`**

from field: string name = 10;

#### Defined in

[src/locations.scailo_pb.ts:255](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L255)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

**`Optional`**

**`Description`**

Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/locations.scailo_pb.ts:248](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L248)

___

### phone

• **phone**: `string` = `""`

The primary contact number of the location

**`Generated`**

from field: string phone = 13;

#### Defined in

[src/locations.scailo_pb.ts:274](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L274)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/locations.scailo_pb.ts:229](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L229)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/locations.scailo_pb.ts:290](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L290)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/locations.scailo_pb.ts:288](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L288)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LocationsServiceUpdateRequest"``

#### Defined in

[src/locations.scailo_pb.ts:289](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L289)

## Methods

### clone

▸ **clone**(): [`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md) \| `PlainMessage`\<[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md) \| `PlainMessage`\<[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md) \| `PlainMessage`\<[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/locations.scailo_pb.ts:312](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L312)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)

#### Defined in

[src/locations.scailo_pb.ts:300](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L300)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)

#### Defined in

[src/locations.scailo_pb.ts:304](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L304)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)

#### Defined in

[src/locations.scailo_pb.ts:308](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L308)
