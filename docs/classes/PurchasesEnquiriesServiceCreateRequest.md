[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesEnquiriesServiceCreateRequest

# Class: PurchasesEnquiriesServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.PurchasesEnquiriesServiceCreateRequest

## Hierarchy

- `Message`\<[`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)\>

  ↳ **`PurchasesEnquiriesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](PurchasesEnquiriesServiceCreateRequest.md#constructor)

### Properties

- [description](PurchasesEnquiriesServiceCreateRequest.md#description)
- [entityUuid](PurchasesEnquiriesServiceCreateRequest.md#entityuuid)
- [formData](PurchasesEnquiriesServiceCreateRequest.md#formdata)
- [priority](PurchasesEnquiriesServiceCreateRequest.md#priority)
- [referenceId](PurchasesEnquiriesServiceCreateRequest.md#referenceid)
- [userComment](PurchasesEnquiriesServiceCreateRequest.md#usercomment)
- [vaultFolderId](PurchasesEnquiriesServiceCreateRequest.md#vaultfolderid)
- [fields](PurchasesEnquiriesServiceCreateRequest.md#fields)
- [runtime](PurchasesEnquiriesServiceCreateRequest.md#runtime)
- [typeName](PurchasesEnquiriesServiceCreateRequest.md#typename)

### Methods

- [clone](PurchasesEnquiriesServiceCreateRequest.md#clone)
- [equals](PurchasesEnquiriesServiceCreateRequest.md#equals)
- [fromBinary](PurchasesEnquiriesServiceCreateRequest.md#frombinary)
- [fromJson](PurchasesEnquiriesServiceCreateRequest.md#fromjson)
- [fromJsonString](PurchasesEnquiriesServiceCreateRequest.md#fromjsonstring)
- [getType](PurchasesEnquiriesServiceCreateRequest.md#gettype)
- [toBinary](PurchasesEnquiriesServiceCreateRequest.md#tobinary)
- [toJSON](PurchasesEnquiriesServiceCreateRequest.md#tojson)
- [toJson](PurchasesEnquiriesServiceCreateRequest.md#tojson-1)
- [toJsonString](PurchasesEnquiriesServiceCreateRequest.md#tojsonstring)
- [equals](PurchasesEnquiriesServiceCreateRequest.md#equals-1)
- [fromBinary](PurchasesEnquiriesServiceCreateRequest.md#frombinary-1)
- [fromJson](PurchasesEnquiriesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](PurchasesEnquiriesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesEnquiriesServiceCreateRequest**(`data?`): [`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)\> |

#### Returns

[`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)

#### Overrides

Message\&lt;PurchasesEnquiriesServiceCreateRequest\&gt;.constructor

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:276](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L276)

## Properties

### description

• **description**: `string` = `""`

The description of the purchase enquiry

**`Generated`**

from field: string description = 16;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:267](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L267)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:232](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L232)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:274](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L274)

___

### priority

• **priority**: `string` = `""`

The priority of the purchase enquiry. Possible values are "low", "medium", "high".

**`Generated`**

from field: string priority = 14;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:260](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L260)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the purchase enquiry

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:253](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L253)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:239](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L239)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:246](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L246)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:283](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L283)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:281](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L281)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesEnquiriesServiceCreateRequest"``

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:282](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L282)

## Methods

### clone

▸ **clone**(): [`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md) \| `PlainMessage`\<[`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md) \| `PlainMessage`\<[`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md) \| `PlainMessage`\<[`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:305](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L305)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:293](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L293)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:297](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L297)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:301](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L301)
